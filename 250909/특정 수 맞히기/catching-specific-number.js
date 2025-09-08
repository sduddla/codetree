const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

const target = 25;

for(let i=0; i<input.length; i++) {
    const n = input[i];

    if(n < target) {
        console.log('Higher');
    } else if(n > target) {
        console.log('Lower');
    } else {
        console.log('Good');
        break;
    }
}