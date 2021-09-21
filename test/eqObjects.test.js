const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

describe('#eqObjects', () => {
  it('Returns true if each object is equal ab = { a: "1"} ba = { b: "2"} returns TRUE', () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });
});
describe('#findKeyByValue', () => {
  it('ab = { a: "1", b: "2" } !== abc = { a: "1", b: "2", c: "3" } returns false', () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });
});