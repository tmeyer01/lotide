const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

let a = [1, 2, 3];
let b = [1, 2, 3];
assertArraysEqual(eqArrays(a, b),true );