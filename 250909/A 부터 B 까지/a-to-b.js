const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let result = [];
let num = a;

while (num <= b) {
    result.push(num);

    if(num % 2 === 1) {
        num *= 2;
    } else {
        num += 3;
    }
}

console.log(result.join(' '));