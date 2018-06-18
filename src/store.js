const { createStore } = require('redux');
const reducers = require('./reducers');

module.exports = data => createStore(
  reducers,
  data,
);
