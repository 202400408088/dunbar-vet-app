/**
 * storage.js - Simple persistence layer over localStorage.
 *
 * All domain entities (customers, appointments) are stored in a single
 * JSON document under the configured storage key. This keeps the app
 * fully offline-capable, matching the clinic's unreliable network context.
 */
(function (global) {
  'use strict';

  var DEFAULT_STATE = {
    customers: [],
    appointments: []
  };

  function loadState() {
    try {
      var raw = global.localStorage.getItem(global.CONFIG.storage.key);
      if (!raw) return clone(DEFAULT_STATE);
      var parsed = JSON.parse(raw);
      return Object.assign({}, DEFAULT_STATE, parsed);
    } catch (err) {
      console.error('Failed to load state, falling back to defaults.', err);
      return clone(DEFAULT_STATE);
    }
  }

  function saveState(state) {
    global.localStorage.setItem(global.CONFIG.storage.key, JSON.stringify(state));
  }

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  global.StorageService = {
    loadState: loadState,
    saveState: saveState
  };
})(window);
