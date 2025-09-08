const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let n = input[0];
let index = 1;

for(let i=0; i<n; i++) {
    let a = input[index++];
    let b = input[index++];

    let sum = 0;
    for(let i=a; i<=b; i++) {
        if(i % 2 === 0) {
            sum += i;
        }
    }

    console.log(sum);
}


