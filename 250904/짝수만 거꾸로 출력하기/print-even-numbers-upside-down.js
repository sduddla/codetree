const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

const n = input[0];
const numbers = input.slice(1, n+1);

const evens = [];

for(let i=0; i<numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        evens.push(numbers[i]);
    }
}

console.log(evens.reverse().join(' '));