const fs = require('fs');

let num = fs.readFileSync(0).toString().trim().split('\n');

let a = parseFloat(num[0]).toFixed(3);
let b = parseFloat(num[1]).toFixed(3);
let c = parseFloat(num[2]).toFixed(3);

console.log(a);
console.log(b);
console.log(c);