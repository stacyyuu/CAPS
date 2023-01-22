const { Server } = require('socket.io');
const { EVENT_NAMES } = require('./utilities');
const Queue = require('./lib/queue');

const io = new Server(3005);
let driverQueue = new Queue();
let vendorQueue = new Queue();

function startEventServer() {
  // socket is object which describes who is connected to
  io.on('connection', (socket) => {
    console.log('There is a new connection.', socket.id);

    // driver queue
    socket.on(EVENT_NAMES.driver_ready, (driver) => {
      console.log(`Driver ${driver.name} is waiting for a pick up.`);
      driverQueue.enqueue(driver.name);
      console.log(driverQueue);
    });
    // BUSY WORK! Whenever the hub gets a pickup or delivered event, send it to everyone
    socket.on(EVENT_NAMES.pickup, (pickup) => {
      console.log('HUB pickup', socket.id, pickup.orderId);
      vendorQueue.enqueue(pickup);
      if (driverQueue) {
        driveQueue.dequeue();
      } else {
      }
      io.emit(EVENT_NAMES.pickup, pickup);
    });

    socket.on(EVENT_NAMES.delivered, (delivered) => {
      console.log('HUB delivered', socket.id, delivered);
      vendorQueue.dequeue(delivered);
      io.emit(EVENT_NAMES.delivered, delivered);
    });

  });

  console.log('Everything is started!');
}

startEventServer();
