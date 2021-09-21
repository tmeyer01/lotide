const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let prop1 of keys1) { // switching to dealing with arrays
    if (Array.isArray(object1[prop1])) { //step3 if key is array, match arrays
      if (!(eqArrays(object1[prop1], object2[prop1]))) { //step 4 eqArrays compare arrays
        return false;
      } else { //if not an array
        if (object1[prop1] !== object2[prop1]) { // works for PRIMITIVE data types
          return false;
        }
      }
    }
  }
  return true; //step 5
};





const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

//assertObjectsEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); // => false

