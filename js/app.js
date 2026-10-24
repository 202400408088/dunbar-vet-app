// Dunbar Vet Clinic Appointment System - App Logic
const STORAGE_KEY = "dunbarVetAppointments";

// Load appointments from localStorage
function loadAppointments() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

// Save appointments to localStorage
function saveAppointments(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

// Check if same pet already has appointment on selected date
function hasDuplicatePetOnDate(petName, date, excludeId = null) {
  const appointments = loadAppointments();
  return appointments.some(item => {
    if (excludeId && item.id === excludeId) return false;
    return item.petName.trim() === petName.trim() && item.date === date;
  });
}

// Check selected date is not past
function isDateInPast(selectedDate) {
  const today = new Date();
  today.setHours(0,0,0,0);
  const pickDate = new Date(selectedDate);
  return pickDate < today;
}

// Create new appointment
function createAppointment(petName, ownerName, date, time, type, notes) {
  if (isDateInPast(date)) {
    alert("Cannot book appointment for past date!");
    return null;
  }
  if (hasDuplicatePetOnDate(petName, date)) {
    alert("This pet already has an appointment on this date!");
    return null;
  }

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
  renderAppointments();
  return newAppt;
}

// Delete appointment
function deleteAppointment(apptId) {
  let list = loadAppointments();
  list = list.filter(item => item.id !== apptId);
  saveAppointments(list);
  renderAppointments();
}

// Render all appointments on page
function renderAppointments() {
  const container = document.getElementById("appointmentList");
  if (!container) return;
  const appointments = loadAppointments();
  container.innerHTML = "";

  appointments.forEach(appt => {
    const div = document.createElement("div");
    div.className = "appointment-item";
    div.innerHTML = `
      <p><strong>Pet:</strong> ${appt.petName}</p>
      <p><strong>Owner:</strong> ${appt.ownerName}</p>
      <p><strong>Date:</strong> ${appt.date} <strong>Time:</strong> ${appt.time}</p>
      <p><strong>Type:</strong> ${appt.type}</p>
      <p><strong>Notes:</strong> ${appt.notes}</p>
      <button onclick="deleteAppointment('${appt.id}')">Cancel Appointment</button>
      <hr>
    `;
    container.appendChild(div);
  });
}

// Form submit handler
function initForm() {
  const form = document.getElementById("appointmentForm");
  if (!form) return;
  form.addEventListener("submit", function(e){
    e.preventDefault();
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const date = document.getElementById("apptDate").value;
    const time = document.getElementById("apptTime").value;
    const type = document.getElementById("apptType").value;
    const notes = document.getElementById("notes").value;

    createAppointment(petName, ownerName, date, time, type, notes);
    form.reset();
  })
}

// Initialize page
window.addEventListener("DOMContentLoaded", ()=>{
  initForm();
  renderAppointments();
});
