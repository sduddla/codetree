const fs = require('fs');
const [a_math, a_eng, b_math, b_eng] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

if(a_math > b_math) {
    console.log(1);
} else if(a_math > b_math && a_eng > b_eng) {
    console.log(1);
} else {
    console.log(0);
}