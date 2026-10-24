/**
 * app.test.js - Lightweight automated tests for the Dunbar Vet app.
 *
 * Runs under Node.js without any test framework. It mocks a minimal
 * `window` (localStorage) so the browser-oriented domain modules can be
 * loaded and exercised. Covers the two appointment types and their
 * business-rule validation.
 */
'use strict';

const fs = require('fs');
const path = require('path');

// ---- Minimal browser-like environment -----------------------------------
function createFakeWindow() {
  const store = {};
  return {
    localStorage: {
      getItem: (k) => (k in store ? store[k] : null),
      setItem: (k, v) => { store[k] = String(v); }
    },
    // modules attach services to `window`
    CustomerService: null,
    AppointmentService: null,
    StorageService: null,
    CONFIG: null
  };
}

function loadModules(global) {
  const root = path.join(__dirname, '..');
  const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
  // config.js depends on `window`
  const fn = new Function('window', read('js/config.js') + read('js/storage.js') +
    read('js/customers.js') + read('js/appointments.js'));
  fn(global);
}

// ---- Tiny assertion helper ----------------------------------------------
let passed = 0;
let failed = 0;
const failures = [];

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log('  PASS  ' + message);
  } else {
    failed++;
    failures.push(message);
    console.log('  FAIL  ' + message);
  }
}

function throws(fn, message) {
  let didThrow = false;
  try { fn(); } catch (e) { didThrow = true; }
  assert(didThrow, message);
}

// ---- Tests ---------------------------------------------------------------
const win = createFakeWindow();
loadModules(win);
const { CustomerService, AppointmentService, CONFIG } = win;

console.log('\n1. Configuration');
assert(CONFIG.clinic.defaultInClinicDurationMin === 15,
  'in-clinic default duration is 15 minutes');
assert(CONFIG.environment === 'development', 'environment is development');

console.log('\n2. Customer management');
const state = { customers: [], appointments: [] };
const c1 = CustomerService.create(state, { name: 'Jane Smith', phone: '0400123456' });
assert(state.customers.length === 1, 'creates one customer');
assert(c1.id === 1, 'customer gets an auto id');
throws(() => CustomerService.create(state, { name: '' }), 'rejects empty customer name');
const found = CustomerService.search(state, 'jane');
assert(found.length === 1, 'searches customer by name (case-insensitive)');
CustomerService.update(state, c1.id, { phone: '0411112222' });
assert(CustomerService.findById(state, c1.id).phone === '0411112222', 'updates customer phone');
CustomerService.remove(state, c1.id);
assert(state.customers.length === 0, 'removes customer');

console.log('\n3. In-clinic appointments (fixed 15-minute slot)');
const customer = CustomerService.create(state, { name: 'Bob Brown' });
const inClinic = AppointmentService.create(state, {
  customerId: customer.id,
  type: 'in-clinic',
  date: '2026-10-06',
  time: '09:00',
  durationMin: 15
});
assert(inClinic.status === 'scheduled', 'creates an in-clinic appointment');
assert(inClinic.durationMin === 15, 'in-clinic uses 15-minute slot');
throws(() => AppointmentService.create(state, {
  customerId: customer.id, type: 'in-clinic', date: '2026-10-06', time: '09:00', durationMin: 30
}), 'rejects in-clinic with non-15-minute duration');
throws(() => AppointmentService.create(state, {
  customerId: customer.id, type: 'in-clinic', date: '2026-10-06', time: '20:00', durationMin: 15
}), 'rejects in-clinic outside opening hours');
throws(() => AppointmentService.create(state, {
  customerId: null, type: 'in-clinic', date: '2026-10-06', time: '09:00', durationMin: 15
}), 'rejects appointment without a customer');

console.log('\n4. Farm-visit appointments (estimated duration)');
const farm = AppointmentService.create(state, {
  customerId: customer.id,
  type: 'farm-visit',
  date: '2026-10-07',
  time: '10:00',
  durationMin: 60,
  notes: 'West pasture, cattle health check'
});
assert(farm.type === 'farm-visit', 'creates a farm-visit appointment');
assert(farm.durationMin === 60, 'farm visit keeps estimated duration');
throws(() => AppointmentService.create(state, {
  customerId: customer.id, type: 'farm-visit', date: '2026-10-07', time: '10:00', durationMin: 5
}), 'rejects farm visit with too-short duration');

console.log('\n5. Queries and cancellation');
assert(AppointmentService.byDate(state, '2026-10-06').length === 1, 'finds appointments by date');
AppointmentService.cancel(state, inClinic.id);
assert(AppointmentService.findById(state, inClinic.id).status === 'cancelled', 'cancels an appointment');

console.log('\n6. Persistence');
win.StorageService.saveState(state);
const reloaded = win.StorageService.loadState();
assert(reloaded.customers.length === state.customers.length, 'state persists across reload');

// ---- Summary -------------------------------------------------------------
console.log('\n========================================');
console.log('Result: ' + passed + ' passed, ' + failed + ' failed');
if (failures.length) console.log('Failures:\n - ' + failures.join('\n - '));
process.exit(failed === 0 ? 0 : 1);
