const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let a = [];
for(let i=0; i<3; i++) {
    a.push(input.slice(i*3, i*3+3));
}

let b = [];
for(let i=0; i<3; i++) {
    b.push(input.slice(9+i*3, 9+i*3+3));
}

for(let i=0; i<3; i++) {
    let total = [];

    for(let j=0; j<3; j++) {
        total.push(a[i][j] * b[i][j]);
    }

    console.log(total.join(' '));
}