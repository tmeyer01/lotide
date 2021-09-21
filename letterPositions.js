const letterPositions = function(sentence) {
  let result = {};
  
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    
    if (!(letter in result)) {
      result[letter] = [];
    }
    result[letter].push(i);
  }
  return result;

};

module.exports = letterPositions;