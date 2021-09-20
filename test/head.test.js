const assertEqual = require('../assertEqual');
const head = require('../head');


assertEqual(head([7,6,7,8]), 7);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "faster");