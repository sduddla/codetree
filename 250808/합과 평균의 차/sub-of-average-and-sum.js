const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

let sum = a + b + c;
let avg = sum / 3;

console.log(sum);
console.log(avg);
console.log(sum-avg);