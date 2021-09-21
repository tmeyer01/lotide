
const assertArraysEqual = require('../assertArraysEqual');

let a = [1, 2, 3];
let b = [1, 2, 3];

assertArraysEqual(a, b);

// const assert = require('chai').assert;
// const assertArraysEqual = require('../assertArraysEqual');

// describe('#asserArraysEqual', () => {
//   it('Returns true if arrays are equal [1,2,3] [1,2,3]', () => {
//    assert.strictEqual(assertArraysEqual([1,2,3]),[1,2,3]);
//   });
// });