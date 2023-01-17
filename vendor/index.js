const { events, chance, EVENT_NAMES } = require('../events');
const { deliveryResponse, sendPickUp } = require('./handler');

function startVendor() {
  // events.on(emitter, eventName)
  events.on(EVENT_NAMES.delivered, deliveryResponse);
  console.log('Vendor is ready!');

  function ready() {
    sendPickUp();

    // set time it takes to send a pick up for driver
    setTimeout(ready, chance.integer({ min: 750, max: 2000 }));
  }

  ready();
}

module.exports = { startVendor };
