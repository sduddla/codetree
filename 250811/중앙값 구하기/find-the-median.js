const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const arr = [a, b, c];
arr.sort((a,b) => a-b);
console.log(arr[1]);