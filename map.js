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

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callBack) => {
  const results = [];
  for (let item of array) {
    results.push(callBack(item));
  }
  return results;
};

// const results1 = map(words, word => word[2]);
// console.log(results1);
// const ab = { a: "1", b: "2" };
const ba = [ 'r', 'o', 'o', 'a', 'o' ];
const ab = [ 'o', 'n', 'j', 'x' ];
assertArraysEqual(map(words, word => word[1]), ba); // => true
assertArraysEqual(map(words, word => word[3]), ab); // => fail

// vagrant [lotide]> node map.js
// ✅✅✅ Assertion Passed: r,o,o,a,o === r,o,o,a,o
// ✅✅✅ Assertion Passed: u,t,,o, === o,n,j,x