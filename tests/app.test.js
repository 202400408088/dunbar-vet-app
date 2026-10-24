// Mock localStorage for node test environment
global.localStorage = {
  data: {},
  getItem(key) {
    return this.data[key] ?? null;
  },
  setItem(key, value) {
    this.data[key] = String(value);
  },
  removeItem(key) {
    delete this.data[key];
  },
  clear() {
    this.data = {};
  }
};

// Import functions (simulate app.js logic)
const STORAGE_KEY = "dunbarVetAppointments";

function loadAppointments() {
  const saved = global.localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

function saveAppointments(list) {
  global.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function hasDuplicatePetOnDate(petName, date, excludeId = null) {
  const appointments = loadAppointments();
  return appointments.some(item => {
    if (excludeId && item.id === excludeId) return false;
    return item.petName.trim() === petName.trim() && item.date === date;
  });
}

function isDateInPast(selectedDate) {
  const today = new Date();
  today.setHours(0,0,0,0);
  const pickDate = new Date(selectedDate);
  return pickDate < today;
}

function createAppointment(petName, ownerName, date, time, type, notes) {
  if (isDateInPast(date)) return null;
  if (hasDuplicatePetOnDate(petName, date)) return null;

  const newAppt = {
    id: Date.now().toString(),
    petName,
    ownerName,
    date,
    time,
    type,
    notes
  };
  const list = loadAppointments();
  list.push(newAppt);
  saveAppointments(list);
  return newAppt;
}

function deleteAppointment(apptId) {
  let list = loadAppointments();
  list = list.filter(item => item.id !== apptId);
  saveAppointments(list);
}

// Node test suite
import { describe, it, assert, beforeEach } from "node:test";

beforeEach(() => {
  global.localStorage.clear();
});

describe("Appointment unit tests", () => {

  it("can successfully create an appointment", () => {
    const appt = createAppointment("Buddy","Tom","2027‑05‑20","10:00","Checkup","routine");
    assert.notEqual(appt, null);
    assert.equal(appt.petName, "Buddy");
    const all = loadAppointments();
    assert.equal(all.length,1);
  });

  it("rejects appointment for duplicate pet same date", () => {
    createAppointment("Buddy","Tom","2027‑05‑20","10:00","Checkup","routine");
    const second = createAppointment("Buddy","Tom","2027‑05‑20","14:00","Vaccination","");
    assert.equal(second, null);
    const all = loadAppointments();
    assert.equal(all.length,1);
  });

  it("rejects appointment with past date", () => {
    const past = createAppointment("Kitty","Amy","2020‑01‑01","09:00","Checkup","");
    assert.equal(past, null);
    const all = loadAppointments();
    assert.equal(all.length,0);
  });

  it("delete appointment updates list", () => {
    const appt = createAppointment("Kitty","Amy","2027‑06‑10","11:00","Grooming","");
    deleteAppointment(appt.id);
    const all = loadAppointments();
    assert.equal(all.length,0);
  });
});
