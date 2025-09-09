const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input.map(line => line.trim().split(/\s+/).map(Number));

let cnt = 0;
for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr[i].length; j++) {
        if(arr[i][j] % 5 === 0) {
            cnt++;
        }
    }
}
console.log(cnt);

