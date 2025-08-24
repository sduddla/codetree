const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const a = input[0];
const b = input[1];
const c = input[2];

const sum = a + b + c;
const avg = sum / 3;

console.log(sum);
console.log(avg);
console.log(sum - avg);