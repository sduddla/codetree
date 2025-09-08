const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

const start = input[0];
const end = input[1];

let result = 0;

for(let i=start; i<=end; i++) {
    let cnt = 0;

    for(let j=1; j<=i; j++) {
        if(i % j === 0) cnt++;
    }

    if(cnt === 3) {
        result++;
    }
}

console.log(result);
