/**
 * app.js - Application shell / controller.
 *
 * Wires the UI to the domain services, renders views and reacts to user
 * actions. Keeps the state in memory and persists it through StorageService
 * on every mutation so the app is fully offline-capable.
 */
(function (global) {
  'use strict';

  var state;
  var currentTab = 'dashboard';

  // ---- boot -------------------------------------------------------------
  function init() {
    state = global.StorageService.loadState();
    bindTabs();
    bindCustomerForm();
    bindAppointmentForm();
    renderAll();
    setEnvironmentBadge();
  }

  function persist() {
    global.StorageService.saveState(state);
    renderAll();
  }

  // ---- tabs -------------------------------------------------------------
  function bindTabs() {
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        switchTab(tab.dataset.tab);
      });
    });
  }

  function switchTab(name) {
    currentTab = name;
    document.querySelectorAll('.tab').forEach(function (t) {
      t.classList.toggle('active', t.dataset.tab === name);
    });
    document.querySelectorAll('.panel').forEach(function (p) {
      p.classList.toggle('active', p.id === name);
    });
  }

  // ---- customers --------------------------------------------------------
  function bindCustomerForm() {
    document.getElementById('btn-add-customer').addEventListener('click', function () {
      showCustomerForm();
    });
    document.getElementById('btn-save-customer').addEventListener('click', saveCustomer);
    document.getElementById('btn-cancel-customer').addEventListener('click', hideCustomerForm);
  }

  function showCustomerForm(customer) {
    var form = document.getElementById('customer-form');
    form.classList.remove('hidden');
    document.getElementById('customer-form-title').textContent = customer ? 'Edit Customer' : 'New Customer';
    document.getElementById('customer-id').value = customer ? customer.id : '';
    document.getElementById('customer-name').value = customer ? customer.name : '';
    document.getElementById('customer-phone').value = customer ? customer.phone : '';
    document.getElementById('customer-email').value = customer ? customer.email : '';
  }

  function hideCustomerForm() {
    document.getElementById('customer-form').classList.add('hidden');
  }

  function saveCustomer() {
    try {
      var id = document.getElementById('customer-id').value;
      var data = {
        name: document.getElementById('customer-name').value,
        phone: document.getElementById('customer-phone').value,
        email: document.getElementById('customer-email').value
      };
      if (id) {
        global.CustomerService.update(state, id, data);
      } else {
        global.CustomerService.create(state, data);
      }
      persist();
      hideCustomerForm();
    } catch (err) {
      alert(err.message);
    }
  }

  // ---- appointments -----------------------------------------------------
  function bindAppointmentForm() {
    document.getElementById('btn-add-appointment').addEventListener('click', function () {
      showAppointmentForm();
    });
    document.getElementById('btn-save-appointment').addEventListener('click', saveAppointment);
    document.getElementById('btn-cancel-appointment').addEventListener('click', hideAppointmentForm);
    document.getElementById('appointment-type').addEventListener('change', function (e) {
      var isInClinic = e.target.value === 'in-clinic';
      if (isInClinic) {
        document.getElementById('appointment-duration').value = global.CONFIG.clinic.defaultInClinicDurationMin;
        document.getElementById('appointment-duration').disabled = true;
      } else {
        document.getElementById('appointment-duration').disabled = false;
      }
    });
  }

  function showAppointmentForm(appointment) {
    populateCustomerSelect(appointment ? appointment.customerId : '');
    var form = document.getElementById('appointment-form');
    form.classList.remove('hidden');
    document.getElementById('appointment-form-title').textContent = appointment ? 'Edit Appointment' : 'New Appointment';
    document.getElementById('appointment-id').value = appointment ? appointment.id : '';
    document.getElementById('appointment-type').value = appointment ? appointment.type : 'in-clinic';
    document.getElementById('appointment-date').value = appointment ? appointment.date : today();
    document.getElementById('appointment-time').value = appointment ? appointment.time : '09:00';
    document.getElementById('appointment-duration').value = appointment ? appointment.durationMin : global.CONFIG.clinic.defaultInClinicDurationMin;
    document.getElementById('appointment-duration').disabled = (!appointment || appointment.type === 'in-clinic');
    document.getElementById('appointment-notes').value = appointment ? appointment.notes : '';
  }

  function hideAppointmentForm() {
    document.getElementById('appointment-form').classList.add('hidden');
  }

  function populateCustomerSelect(selectedId) {
    var select = document.getElementById('appointment-customer');
    select.innerHTML = '';
    var placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = '-- Select customer --';
    select.appendChild(placeholder);
    global.CustomerService.findAll(state).forEach(function (c) {
      var opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = c.name + (c.phone ? ' (' + c.phone + ')' : '');
      if (String(c.id) === String(selectedId)) opt.selected = true;
      select.appendChild(opt);
    });
  }

  function saveAppointment() {
    try {
      var id = document.getElementById('appointment-id').value;
      var data = {
        customerId: document.getElementById('appointment-customer').value,
        type: document.getElementById('appointment-type').value,
        date: document.getElementById('appointment-date').value,
        time: document.getElementById('appointment-time').value,
        durationMin: document.getElementById('appointment-duration').value,
        notes: document.getElementById('appointment-notes').value
      };
      if (id) {
        global.AppointmentService.update(state, id, data);
      } else {
        global.AppointmentService.create(state, data);
      }
      persist();
      hideAppointmentForm();
    } catch (err) {
      alert(err.message);
    }
  }

  // ---- rendering --------------------------------------------------------
  function renderAll() {
    renderStats();
    renderCustomers();
    renderAppointments();
    renderToday();
  }

  function renderStats() {
    document.getElementById('stat-customers').textContent = state.customers.length;
    document.getElementById('stat-appointments').textContent = state.appointments.length;
    document.getElementById('stat-inclinic').textContent =
      state.appointments.filter(function (a) { return a.type === 'in-clinic' && a.status !== 'cancelled'; }).length;
    document.getElementById('stat-farm').textContent =
      state.appointments.filter(function (a) { return a.type === 'farm-visit' && a.status !== 'cancelled'; }).length;
  }

  function renderCustomers() {
    var container = document.getElementById('customer-list');
    var customers = global.CustomerService.findAll(state);
    if (!customers.length) {
      container.innerHTML = '<p class="empty">No customers yet. Click "+ New Customer" to begin.</p>';
      return;
    }
    container.innerHTML = '';
    customers.forEach(function (c) {
      var item = document.createElement('div');
      item.className = 'list-item';
      item.innerHTML =
        '<div>' +
        '<div class="item-title">' + escapeHtml(c.name) + '</div>' +
        '<div class="item-sub">' + escapeHtml(c.phone || '') + (c.email ? ' · ' + escapeHtml(c.email) : '') + '</div>' +
        '</div>' +
        '<div class="item-actions">' +
        '<button class="btn btn-secondary" data-action="edit-customer" data-id="' + c.id + '">Edit</button>' +
        '<button class="btn btn-danger" data-action="delete-customer" data-id="' + c.id + '">Delete</button>' +
        '</div>';
      container.appendChild(item);
    });
  }

  function renderAppointments() {
    var container = document.getElementById('appointment-list');
    var appointments = global.AppointmentService.findAll(state);
    if (!appointments.length) {
      container.innerHTML = '<p class="empty">No appointments yet. Click "+ New Appointment" to begin.</p>';
      return;
    }
    container.innerHTML = '';
    appointments.slice().sort(byDateTime).forEach(function (a) {
      var customer = global.CustomerService.findById(state, a.customerId);
      var item = document.createElement('div');
      var classes = ['list-item'];
      if (a.type === 'farm-visit') classes.push('farm');
      if (a.status === 'cancelled') classes.push('cancelled');
      item.className = classes.join(' ');
      var typeTag = a.type === 'in-clinic' ? 'In-Clinic' : 'Farm Visit';
      item.innerHTML =
        '<div>' +
        '<div class="item-title">' + escapeHtml(customer ? customer.name : 'Unknown') +
        ' <span class="tag">' + typeTag + '</span>' +
        (a.status === 'cancelled' ? ' <span class="tag">Cancelled</span>' : '') +
        '</div>' +
        '<div class="item-sub">' + escapeHtml(a.date) + ' ' + escapeHtml(a.time) + ' · ' + a.durationMin + ' min' +
        (a.notes ? ' · ' + escapeHtml(a.notes) : '') + '</div>' +
        '</div>' +
        '<div class="item-actions">' +
        (a.status !== 'cancelled' ? '<button class="btn btn-secondary" data-action="edit-appointment" data-id="' + a.id + '">Edit</button>' : '') +
        '<button class="btn btn-danger" data-action="cancel-appointment" data-id="' + a.id + '">Cancel</button>' +
        '</div>';
      container.appendChild(item);
    });
  }

  function renderToday() {
    var container = document.getElementById('today-list');
    var todays = global.AppointmentService.byDate(state, today());
    if (!todays.length) {
      container.innerHTML = '<p class="empty">No appointments scheduled for today.</p>';
      return;
    }
    container.innerHTML = '';
    todays.slice().sort(byDateTime).forEach(function (a) {
      var customer = global.CustomerService.findById(state, a.customerId);
      var item = document.createElement('div');
      item.className = 'list-item' + (a.type === 'farm-visit' ? ' farm' : '');
      item.innerHTML =
        '<div>' +
        '<div class="item-title">' + escapeHtml(a.time) + ' · ' + escapeHtml(customer ? customer.name : 'Unknown') + '</div>' +
        '<div class="item-sub">' + (a.type === 'in-clinic' ? 'In-Clinic (15 min)' : 'Farm Visit (' + a.durationMin + ' min)') + '</div>' +
        '</div>';
      container.appendChild(item);
    });
  }

  function setEnvironmentBadge() {
    var badge = document.getElementById('env-badge');
    var version = document.getElementById('footer-version');
    badge.textContent = global.CONFIG.environment;
    badge.title = 'App version: ' + global.CONFIG.version;
    version.textContent = 'Version ' + global.CONFIG.version + ' · ' + global.CONFIG.environment;
  }

  // ---- helpers ----------------------------------------------------------
  function byDateTime(a, b) {
    if (a.date !== b.date) return a.date < b.date ? -1 : 1;
    return a.time < b.time ? -1 : 1;
  }

  function today() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }

  // ---- global click delegation -----------------------------------------
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-action]');
    if (!btn) return;
    var action = btn.dataset.action;
    var id = btn.dataset.id;
    if (action === 'edit-customer') {
      var customer = global.CustomerService.findById(state, id);
      if (customer) showCustomerForm(customer);
    } else if (action === 'delete-customer') {
      if (confirm('Delete this customer?')) {
        global.CustomerService.remove(state, id);
        persist();
      }
    } else if (action === 'edit-appointment') {
      var appointment = global.AppointmentService.findById(state, id);
      if (appointment) showAppointmentForm(appointment);
    } else if (action === 'cancel-appointment') {
      if (global.CONFIG.features.allowCancelAppointment && confirm('Cancel this appointment?')) {
        global.AppointmentService.cancel(state, id);
        persist();
      }
    }
  });

  document.addEventListener('DOMContentLoaded', init);
})(window);
