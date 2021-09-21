const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArray', () => {
  it('See if arrays are the same [1, 2, 3], [1, 2, 3]) returns  true', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
});
describe('#eqArray', () => {
  it('See if the arrays are the same ["1", "2", "3"], ["1", "2", 3]), false', () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});




// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);