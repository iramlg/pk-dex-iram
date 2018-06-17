const { createStore, compose, applyMiddleware } = require('redux');
const reducers = require('./reducers');

module.exports = (data) => {
  return createStore(
    reducers,
    data,
  );
};
