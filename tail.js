
const tail = function(array) {
  let tail = [];
  if (array.length === 0) {
    tail = array[0];
  } else {
    tail = array.slice(1);
  }
  return tail;
};



module.exports = tail;

