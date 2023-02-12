import { commentCounter } from '../src/modules/counter.js';

describe('commentCounter', () => {
  test('returns the number of comments', () => {
    const comments = ['Comment 1', 'Comment 2', 'Comment 3'];
    expect(commentCounter(comments)).toBe(3);
  });
});