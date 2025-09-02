const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

let arr = [];
arr[0] = Number(input[0]);
arr[1] = Number(input[1]);

for(let i=2; i<10; i++) {
    arr.push((arr[i-2] + arr[i-1]) % 10);
}

let result = '';
for(let i of arr) {
    result += i + ' ';
}

console.log(result);