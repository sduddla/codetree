const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim());

console.log(input);

if(input < 0) {
    console.log('minus');
}