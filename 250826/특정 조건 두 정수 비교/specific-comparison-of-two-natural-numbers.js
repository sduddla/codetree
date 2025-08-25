const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const a = input[0];
const b = input[1];

console.log(Number(a<b), Number(a===b));