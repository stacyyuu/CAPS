const { chance, EVENT_NAMES } = require('../../server/utilities');
const { deliveryResponse, sendPickUp, socket } = require('./handler');

function startVendor() {
  // events.on(emitter, eventName)
  console.log('Vendor is ready!');
  socket.on(EVENT_NAMES.delivered, deliveryResponse);

  function ready() {
    sendPickUp();

    // set time it takes to send a pick up for driver
    setTimeout(ready, chance.integer({ min: 2000, max: 3000 }));
  }

  ready();
}

startVendor();
