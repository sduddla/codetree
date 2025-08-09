const fs = require('fs');
let num = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let a = num[0];
let n = num[1];

for(let i=0; i<n; i++) {
   a += n;
   console.log(a);
}
