const assertEqual = function(actual, expected) {
  //console.assert(actual === expected);

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const head = function(array){
  let head = array[0];
  //console.log(head);
  return head;
}

assertEqual(head([7,6,7,8]), 7);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "faster");