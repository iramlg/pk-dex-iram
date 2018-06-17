const { combineReducers } = require('redux');
const singlePageApp = require('./singlePageApp/reducer');

const combinedReducers = combineReducers({
  singlePageApp,
});

module.exports = combinedReducers;
