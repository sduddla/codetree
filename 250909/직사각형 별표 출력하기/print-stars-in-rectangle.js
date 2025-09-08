const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

const n = input[0];
const m = input[1];

let str = '';
for(let i=0; i<n; i++) {
    for(let j=0; j<m; j++) {
        str += '* ';
    }
    str += '\n';
}
console.log(str);