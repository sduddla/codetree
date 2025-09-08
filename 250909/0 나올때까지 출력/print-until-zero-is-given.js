const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let i=0;
while(i < input.length && input[i] !== 0) {
    console.log(input[i]);
    i++;
}