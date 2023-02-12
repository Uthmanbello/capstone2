const { default: reservationCounter } = require('../src/modules/counter.js');

describe('test for reservation counts', () => {
  test('should return the correct array length for reseravtions array', () => {
    expect(reservationCounter(['me', '34', 23, 0, 'you'])).toBe(5);
  });
});