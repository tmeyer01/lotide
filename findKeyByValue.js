const findKeyByValue = function(objects, value) {

  for (const items in objects) {
    //console.log(items)
    if (value === objects[items]) {
      //console.log(items)
      return items;
    }
  }

};



module.exports = findKeyByValue;