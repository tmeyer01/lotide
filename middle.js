const assertEqual = function(actual, expected) {
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

const middle = function(array) {

  let middle = [];
  

  //console.log(`this is the array ${array}`)
  //console.log(`this is the array lenght ${array.length}`);
  
  let midIndex = Math.ceil(array.length / 2);
  let midIndexPlusOne = midIndex + 1;

  if (array.length <= 2) {
    return middle;
  }
  if (array.length % 2 !== 0) {
    middle.push(midIndex);
    return middle;
  } else {
    middle.push(midIndex);
    middle.push(midIndexPlusOne);
    return middle;

  }
  
};


//console.log(middle([1, 2]))

console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

assertEqual(eqArrays([1, 2, 3], [2]), true);
assertEqual(eqArrays([1, 2, 3, 4], [ 2, 3]), true);