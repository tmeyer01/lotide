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





const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};


const without = function(source, itemsToRemove) {
  let newArray = [];

  for (let i = 0; i < source.length; i++) {
    
    let match = false;
    
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        match = true;
      }
    }
    if (!match) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

console.log(without([1, 2, 3], [2]));
console.log(without(["1", "2", "3"], [2, "3"]));
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"]));


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);