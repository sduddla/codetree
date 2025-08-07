const fs = require('fs');

let input = fs.readFileSync(0).toString().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let sum = a + b;

console.log(`${a} ${b} ${sum}`);