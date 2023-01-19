const { EVENT_NAMES } = require('../utilities');
const { sendPickUp, deliveryResponse, events } = require('./handler');

jest.useFakeTimers();

describe('Vendor Tests', () => {
  test('Vendor Send Pick Up', () => {
    // arrange
    const emitMock = jest.spyOn(events, 'emit');

    // act
    sendPickUp();

    //assert
    expect(emitMock).toHaveBeenCalledWith(
      EVENT_NAMES.pickup,
      expect.objectContaining({
        store: expect.stringContaining(''),
        orderId: expect.stringMatching(
          /[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}/i
        ),
      })
    );
  });

  test('Vendor Delivery Response', () => {
    // arrange
    const consoleMock = jest.spyOn(console, 'log');

    // act
    deliveryResponse('12345');

    // assert
    expect(consoleMock).toHaveBeenCalledWith(
      'Vendor thanks you for the delivery!',
      '12345'
    );
  });
});
