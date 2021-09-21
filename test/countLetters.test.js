const assert = require('chai').assert;
const countLetters = require('../countLetters');


describe('#countLetters', () => {
  it('returns number count of each letter entered', () => {
    assert.deepEqual(countLetters("lenny"), { l: 1, e: 1, n: 2, y: 1 });
  });
});
describe('#countLetters', () => {
  it('l with return {l:1}', () => {
    assert.deepEqual(countLetters("l"), { l: 1});
  });
});