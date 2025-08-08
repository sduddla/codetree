const fs = require('fs');
let num = fs.readFileSync(0).toString().trim().split(' ')

let a = num[0];
let b = num[1];

if(a >= b) {
    console.log(1);
} else {
    console.log(0);
}

if(a > b) {
    console.log(1);
} else {
    console.log(0);
}

if(b >= a) {
    console.log(1);
} else {
    console.log(0);
}

if(b > a) {
    console.log(1);
} else {
    console.log(0);
}

if(a === b) {
    console.log(1);
} else {
    console.log(0);
}

if(a !== b) {
    console.log(1);
} else {
    console.log(0);
}
