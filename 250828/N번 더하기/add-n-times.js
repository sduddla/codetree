const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let a =  input[0];
let n = input[1];

for(let i=0; i<n; i++) {
   a += n;
   console.log(a);
}