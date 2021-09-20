
const assert = require('chai').assert;
const tail = require('../tail');
const assertEqual = require('../assertEqual');


describe('#tail', () => {
  it('returns 2,3 for [1,2,3]', () => {
    assertEqual(tail([1, 2, 3]).length, 2);
  });
});
describe('#tail', () => {
  it('returns emtpy arry if only one element in arry', () => {
    assertEqual(tail([6]).length, 0);
  });
});