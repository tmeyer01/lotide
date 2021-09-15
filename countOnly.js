const assertEqual = function(actual, expected) {
  //console.assert(actual === expected);

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//allItems: an array of strings that we need to look through
//itemsToCount: an object specifying what to count


const countOnly = function(allItems, itemsToCount) {
  //console.log(itemsToCount['Agouhanna']);
  let namesCounted = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (namesCounted[item]) {
        namesCounted[item] += 1;
      } else {
        namesCounted[item] = 1;
      }
    }
    
    
  }
  console.log(namesCounted);
  return namesCounted;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });





assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);