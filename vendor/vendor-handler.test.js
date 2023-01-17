const { events, EVENT_NAMES } = require('../events');
const { sendPickUp, deliveryResponse } = require('./handler');

jest.useFakeTimers();

describe('Vendor Tests', () => {
  test('Vendor Send Pick Up', () => {
    // arrange
    const emitMock = jest.spyOn(events, 'emit');

    // act
    sendPickUp();

    //assert
    expect(emitMock).toHaveBeenCalledWith(EVENT_NAMES.pickup, expect.objectContaining({}));
  });
  
  test('Vendor Delivery Response', () => {
    // arrange
    const consoleMock = jest.spyOn(console, 'log');

    // act
    deliveryResponse('12345');

    // assert
    expect(consoleMock).toHaveBeenCalledWith('Vendor thanks you for the delivery!', '12345');
  });
});
