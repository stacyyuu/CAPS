const { EventEmitter } = require('events');
const chance = require('chance')();

// single event emitter
const events = new EventEmitter();

const EVENT_NAMES = {
  pickup: 'pickup',
  delivered: 'delivered',
};

module.exports = {
  events,
  chance,
  EVENT_NAMES,
};
