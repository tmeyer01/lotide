const assert = require('chai').assert;
const letterPositions = require('../letterPositions');


describe('#letterPositions', () => {
  it('Returns position of letters in array', () => {
    assert.deepEqual(letterPositions("l"), { l: [ 0 ] });
  });
});
describe('#countLetters', () => {
  it('len returns { l:[0], e:[1], n:[2]}', () => {
    assert.deepEqual(letterPositions("len"), { l: [ 0 ], e: [ 1 ], n: [ 2 ]});
  });
});