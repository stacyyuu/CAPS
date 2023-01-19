const { chance, EVENT_NAMES } = require('../utilities');
const { io } = require('socket.io-client');

const events = io('ws://localhost:3005');

// when triggered, module stimulates pickup event for given store name to hub, sends pickup, sends a vender order to payload
function sendPickUp() {
  const event = {
    store: chance.company(),
    orderId: chance.guid(),
    customer: chance.name({ nationality: 'en' }),
    address: chance.address(),
  };
  console.log('Vendor is requesting pick up for', event);

  // produces event with pick up/delivery information
  events.emit(EVENT_NAMES.pickup, event);
}

function deliveryResponse(orderId) {
  console.log('Vendor thanks you for the delivery!', orderId);
}

module.exports = {
  deliveryResponse,
  sendPickUp,
  events,
};
