const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

for(let i=0; i<4; i++) {
    const nums = input[i].trim().split(/\s+/).map(Number);
    const sum = nums.reduce((a, b) => a + b);
    console.log(sum);
}

