const fs = require('fs');
const n = fs.readFileSync(0).toString().trim();

console.log(`Your score is ${n} point.`)