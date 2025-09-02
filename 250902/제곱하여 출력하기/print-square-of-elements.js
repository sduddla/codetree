const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/);

let n = Number(input[0]);
const arr = input.slice(1, n+1).map(Number).map(i => i ** 2);
console.log(arr.join(' '));