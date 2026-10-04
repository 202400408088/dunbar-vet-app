/**
 * config.js - Application configuration loader.
 *
 * The app reads its runtime settings from a config JSON object. In a real
 * deployment the values are injected per-environment (development vs.
 * production). Here we expose a single CONFIG object that mirrors
 * config/config.json, so settings such as storage key, clinic hours and
 * default consultation length can be managed centrally and versioned.
 */
(function (global) {
  'use strict';

  var CONFIG = {
    appName: 'Dunbar Vet Clinic Appointment System',
    version: '1.0.0',
    environment: 'development',
    storage: {
      // localStorage key used to persist all domain data
      key: 'dunbar-vet-app-data'
    },
    clinic: {
      // In-clinic consultations use fixed 15-minute slots
      defaultInClinicDurationMin: 15,
      openHour: 8,
      closeHour: 18
    },
    features: {
      allowCancelAppointment: true
    }
  };

  global.CONFIG = CONFIG;
})(window);
