const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = parseFloat(input[0]).toFixed(3);
const b = parseFloat(input[1]).toFixed(3);
const c = parseFloat(input[2]).toFixed(3);

console.log(a);
console.log(b);
console.log(c);