const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let arr = [];
for(let i=0; i<3; i++) {
    arr.push(input.slice(i*3, i*3 + 3));
}

for(let i=0; i<3; i++) {
    let result = arr[i].map(item => item * 3).join(' ');
    console.log(result);
}
