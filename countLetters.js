const assertEqual = function(actual, expected) {
  //console.assert(actual === expected);

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  
  let noSpaces = string.split(" ").join("");
  let lettersCounted = {};
  let sentenceArray = [];

  //console.log(noSpaceString);

  for (let i = 0; i < noSpaces.length; i++) {
    sentenceArray.push(noSpaces[i]);
  }

  for (const elm of sentenceArray) {
   
    if (lettersCounted[elm]) {
      lettersCounted[elm] += 1;
    } else {
      lettersCounted[elm] = 1;
    }

  }

  console.log(lettersCounted);
  return lettersCounted;

};


//countLetters("bbaa rrr")
countLetters("bbaa rr      sssssssr");