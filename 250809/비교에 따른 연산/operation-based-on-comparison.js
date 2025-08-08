const fs = require('fs');
let num = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let a = num[0];
let b = num[1];

if(a > b) {
    console.log(a*b);
} else {
    console.log(Math.floor(b/a));
}