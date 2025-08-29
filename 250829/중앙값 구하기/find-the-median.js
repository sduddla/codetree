const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

const arr = [a, b, c];
const result = arr.sort((a,b) => a-b);
console.log(result[1]);