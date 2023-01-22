const { EVENT_NAMES } = require('../../server/utilities');
const { handlePickUp, socket } = require('./handler');

function startDriver() {

  socket.emit(EVENT_NAMES.driver_ready, () => {
    console.log('Driver is ready for pick up!');
  });
  // add callback function that's going to be executed when event is triggered
  socket.on(EVENT_NAMES.pickup, handlePickUp);
}

startDriver();
