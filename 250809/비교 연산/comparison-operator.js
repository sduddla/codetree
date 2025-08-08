const fs = require('fs');
let num = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let a = num[0];
let b = num[1];

console.log(a >= b ? 1 : 0);
console.log(a > b ? 1 : 0);
console.log(b >= a ? 1 : 0);
console.log(b > a ? 1 : 0);
console.log(a === b ? 1 : 0);
console.log(a !== b ? 1 : 0);
