const assert = require('chai').assert;
const middle = require('../middle');


describe('#middle', () => {
  it('Return empty array for array entered with one or two elements', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});
describe('#middle', () => {
  it('returns middle element for arrays with odd number', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});
describe('#middle', () => {
  it('returns middle two elements for arrays entered with even number', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2,3]);
  });
});

