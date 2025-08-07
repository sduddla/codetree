const fs = require('fs');
let n = parseFloat(fs.readFileSync(0).toString().trim());
let nn = n.toFixed(2);

console.log(nn);