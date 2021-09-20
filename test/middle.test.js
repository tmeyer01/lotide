const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

let x = middle([1, 2, 3, 4])
assertArraysEqual([1, 2, 3, 4], x);
assertArraysEqual([ 2, 3], [2, 3]);