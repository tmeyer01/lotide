const middle = function(array) {

  let middle = [];
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

module.exports = middle;