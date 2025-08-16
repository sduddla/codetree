const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let cnt3 = 0;
let cnt5 = 0;

for(let i=0; i<input.length; i++) {
    if(input[i] % 3 === 0) cnt3++;
    if(input[i] % 5 === 0) cnt5++;
}
console.log(cnt3, cnt5);