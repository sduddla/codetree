const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let result = '';
for(let i=0; i<n; i++) {
    let row = [];
    for(let j=0; j<n; j++) {
        if(i%2 === 0) {
            row.push((j+1) % 10);
        } else {
            row.push((n - j) % 10);
        }
    }
    result += row.join('') + '\n';
}
console.log(result);