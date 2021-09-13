const assertEqual = function(actual, expected) {
  //console.assert(actual === expected);

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const tail = function(array) {
  
  let tail = [];


  if (array.length === 0) {
    tail = array[0];
  } else {
    tail = array.slice(1);
  }

  //console.log(tail);
  
  return tail;

};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);



//assertEqual(tail([7,6,7,8]), [6, 7, 8]);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "faster");