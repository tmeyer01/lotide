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


//findKey take object and callback
//scan object and return first key which callback returns true
//no key found return undefined

const findKey = (object, callback) => {

  for (const item in object) {
    //console.log(object[item])
    // console.log(callback(item)); // true or false
    //console.log(object[item]) // {stars: num}    <----- value pair of key
    //console.log(item) // Key ala "blue hill etc" <---- Key
    //console.log(callback(item)) // <----- true or false
 
    if (callback(object[item])) {
      return item;
    }

  }

};



findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"