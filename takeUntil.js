const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};


//take items from array untill call back is true
const takeUntil = (array, callback) => {

  const result = [];

  for (let item of array) {//loop through all items in array
    //console.log(item);
    if (!callback(item)) {//If its not call back item push to results
      result.push(item);
    } else {
      return result;//When callback item true, return resuls
    }
  }
  return result;//return results

};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const results1Expected = [ 1, 2, 5, 7, 2];
const results2Expected = [ "I've", 'been', 'to', 'Hollywood' ];

assertArraysEqual(results1, results1Expected);
assertArraysEqual(results2, results2Expected);