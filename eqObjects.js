const assertEqual = function(actual, expected) {
  //console.assert(actual === expected);

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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



// Inside our loop, compare both objects' values for that key.
// Use === to ensure that the types are the same!
// As soon as there is not a match, we can return false

// Our control flow will therefore only get to the end of the loop if all the keys matched
// We can and should thus return true at the end (after the loop)


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false