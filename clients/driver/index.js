const { EVENT_NAMES, chance } = require('../../server/utilities');
const { handlePickUp, socket } = require('./handler');

function startDriver() {

  socket.emit(EVENT_NAMES.driver_ready, {name: chance.first()});
  setTimeout(startDriver, chance.integer({ min: 4000, max: 5000 }));
  // add callback function that's going to be executed when event is triggered
  socket.on(EVENT_NAMES.pickup, handlePickUp);
}

startDriver();
