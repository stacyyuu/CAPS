const { EVENT_NAMES } = require('../utilities');
const { handlePickUp, events } = require('./handler');

function startDriver() {
  console.log('Driver is ready!');

  // add callback function that's going to be executed when event is triggered
  events.on(EVENT_NAMES.pickup, handlePickUp);
}

startDriver();
