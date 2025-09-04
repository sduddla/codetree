const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let count3 = 0;
let count5 = 0;

for(let i=0; i<input.length; i++) {
    if(input[i] % 3 === 0) count3++;
    if(input[i] % 5 === 0) count5++;
}

console.log(`${count3} ${count5}`);