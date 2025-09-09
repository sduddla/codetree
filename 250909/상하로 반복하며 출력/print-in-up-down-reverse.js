const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim().split('\n'));

let result = [];
for(let i=0; i<n; i++) {
    let row = [];
    for(let j=0; j<n; j++) {
        if(j % 2 === 0) {
            row.push(i+1);
        } else {
            row.push(n-i);
        }
    }
    result += row.join('') + '\n';
}
console.log(result);
