const fs = require('fs');
const char = fs.readFileSync(0).toString().trim();

let answer = '';
for(let i=0; i<8; i++) {
    answer += char;
}
console.log(answer);