const { default: commentCounter } = require('../src/modules/counter.js');

describe('test for comment counts', () => {
  test('should return the correct array lenght for comments array', () => {
    expect(commentCounter([0, 'u', '8'])).toBe(3);
  });
});