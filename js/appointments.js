/**
 * appointments.js - Appointment domain logic.
 *
 * Two appointment types:
 *   - in-clinic: bound to a customer, uses a fixed 15-minute slot and must
 *     fall within clinic opening hours.
 *   - farm-visit: bound to a customer + property location, carries an
 *     estimated duration and is not restricted to fixed slots.
 */
(function (global) {
  'use strict';

  function findAll(state) {
    return state.appointments;
  }

  function findById(state, id) {
    return state.appointments.find(function (a) { return String(a.id) === String(id); });
  }

  function create(state, data) {
    validate(state, data);
    var appointment = {
      id: nextId(state),
      customerId: data.customerId,
      type: data.type,
      date: data.date,
      time: data.time,
      durationMin: Number(data.durationMin),
      notes: (data.notes || '').trim(),
      status: 'scheduled',
      createdAt: new Date().toISOString()
    };
    state.appointments.push(appointment);
    return appointment;
  }

  function update(state, id, data) {
    var appointment = findById(state, id);
    if (!appointment) throw new Error('Appointment not found.');
    validate(state, data, appointment);
    if (data.customerId !== undefined) appointment.customerId = data.customerId;
    if (data.type !== undefined) appointment.type = data.type;
    if (data.date !== undefined) appointment.date = data.date;
    if (data.time !== undefined) appointment.time = data.time;
    if (data.durationMin !== undefined) appointment.durationMin = Number(data.durationMin);
    if (data.notes !== undefined) appointment.notes = data.notes.trim();
    return appointment;
  }

  function cancel(state, id) {
    var appointment = findById(state, id);
    if (!appointment) throw new Error('Appointment not found.');
    appointment.status = 'cancelled';
    return appointment;
  }

  function byDate(state, date) {
    return state.appointments.filter(function (a) { return a.date === date; });
  }

  function byCustomer(state, customerId) {
    return state.appointments.filter(function (a) {
      return String(a.customerId) === String(customerId);
    });
  }

  function validate(state, data, current) {
    if (!data.customerId) throw new Error('A customer must be selected.');
    if (!data.date || !data.time) throw new Error('Date and time are required.');
    if (data.type !== 'in-clinic' && data.type !== 'farm-visit') {
      throw new Error('Appointment type is invalid.');
    }
    if (data.type === 'in-clinic') {
      var slotMin = global.CONFIG.clinic.defaultInClinicDurationMin;
      // enforce the fixed 15-minute slot
      if (data.durationMin === undefined || Number(data.durationMin) !== slotMin) {
        throw new Error('In-clinic consultations must use the fixed 15-minute slot.');
      }
    }
    if (data.type === 'farm-visit') {
      if (!data.durationMin || Number(data.durationMin) < 15) {
        throw new Error('Farm visits require an estimated duration of at least 15 minutes.');
      }
    }
    // basic overlap check within clinic opening hours for in-clinic
    if (data.type === 'in-clinic') {
      var hour = Number(String(data.time).split(':')[0]);
      if (hour < global.CONFIG.clinic.openHour || hour >= global.CONFIG.clinic.closeHour) {
        throw new Error('In-clinic appointments must fall within clinic opening hours.');
      }
    }
  }

  function nextId(state) {
    return state.appointments.reduce(function (max, a) {
      return Math.max(max, Number(a.id) || 0);
    }, 0) + 1;
  }

  global.AppointmentService = {
    findAll: findAll,
    findById: findById,
    create: create,
    update: update,
    cancel: cancel,
    byDate: byDate,
    byCustomer: byCustomer
  };
})(window);
