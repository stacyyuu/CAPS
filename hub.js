const { Server } = require('socket.io');
const { EVENT_NAMES } = require('./utilities');

const io = new Server(3005);

function startEventServer() {
  // socket is object which describes who is connected to
  io.on('connection', (socket) => {
    console.log('There is a new connection.', socket.id);

    // BUSY WORK! Whenever the hub gets a pickup or delivered event, send it to everyone
    socket.on(EVENT_NAMES.delivered, (delivered) => {
      console.log('HUB delivered', delivered);
      io.emit(EVENT_NAMES.delivered, delivered);
    });

    socket.on(EVENT_NAMES.pickup, (pickup) => {
      console.log('HUB pickup', pickup.orderId);
      io.emit(EVENT_NAMES.pickup, pickup);
    });
  });

  console.log('Everything is started!');
}

startEventServer();
