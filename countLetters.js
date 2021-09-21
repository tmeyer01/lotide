const countLetters = function(string) {
  
  let noSpaces = string.split(" ").join("");
  let lettersCounted = {};
  let sentenceArray = [];

  
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
  return lettersCounted;
};

module.exports = countLetters;