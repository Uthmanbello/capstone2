import { reservationCounter } from '../src/modules/counter.js'

describe('reservationCounter', () => {
  test('returns the number of reservations', () => {
    const reservations = ['Reservation 1', 'Reservation 2', 'Reservation 3'];
    expect(reservationCounter(reservations)).toBe(3);
  });
});