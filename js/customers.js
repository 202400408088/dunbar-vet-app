/**
 * customers.js - Customer domain logic.
 *
 * Provides create, read, update, delete and search operations for customer
 * records. Customers are the anchor entity: both appointment types belong to
 * a customer.
 */
(function (global) {
  'use strict';

  function findAll(state) {
    return state.customers;
  }

  function findById(state, id) {
    return state.customers.find(function (c) { return String(c.id) === String(id); });
  }

  function search(state, query) {
    if (!query) return state.customers;
    var q = query.toLowerCase();
    return state.customers.filter(function (c) {
      return (c.name && c.name.toLowerCase().indexOf(q) !== -1) ||
             (c.phone && c.phone.toLowerCase().indexOf(q) !== -1);
    });
  }

  function create(state, data) {
    if (!data || !data.name) {
      throw new Error('Customer name is required.');
    }
    var customer = {
      id: nextId(state),
      name: data.name.trim(),
      phone: (data.phone || '').trim(),
      email: (data.email || '').trim(),
      createdAt: new Date().toISOString()
    };
    state.customers.push(customer);
    return customer;
  }

  function update(state, id, data) {
    var customer = findById(state, id);
    if (!customer) throw new Error('Customer not found.');
    if (data.name !== undefined && !data.name.trim()) {
      throw new Error('Customer name is required.');
    }
    if (data.name) customer.name = data.name.trim();
    if (data.phone !== undefined) customer.phone = data.phone.trim();
    if (data.email !== undefined) customer.email = data.email.trim();
    return customer;
  }

  function remove(state, id) {
    var before = state.customers.length;
    state.customers = state.customers.filter(function (c) {
      return String(c.id) !== String(id);
    });
    return state.customers.length < before;
  }

  function nextId(state) {
    return state.customers.reduce(function (max, c) {
      return Math.max(max, Number(c.id) || 0);
    }, 0) + 1;
  }

  global.CustomerService = {
    findAll: findAll,
    findById: findById,
    search: search,
    create: create,
    update: update,
    remove: remove
  };
})(window);
