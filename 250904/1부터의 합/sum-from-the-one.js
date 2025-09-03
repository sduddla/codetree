const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim());

let sum = 0;
let last = 0;


for(let i=1; i<=100; i++) {
    sum += i;
    if(sum >= input) {
        last = i;
        break;
    }
}

console.log(last);