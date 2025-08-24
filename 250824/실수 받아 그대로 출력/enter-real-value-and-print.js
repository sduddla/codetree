const fs = require('fs');
const num = parseFloat(fs.readFileSync(0).toString().trim()).toFixed(2);

console.log(num);