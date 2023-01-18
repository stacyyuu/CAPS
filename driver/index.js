const { events, EVENT_NAMES } = require('../events');
const { handlePickUp } = require('./handler');

function startDriver() {
  console.log('Driver is ready!');

  // add callback function that's going to be executed when event is triggered
  events.on(EVENT_NAMES.pickup, handlePickUp);
}

module.exports = { startDriver };
