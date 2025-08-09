const fs = require('fs');

let ch =  fs.readFileSync(0).toString().trim();

console.log(ch.repeat(8));