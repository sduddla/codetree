const fs = require('fs');
let score = Number(fs.readFileSync(0).toString().trim());

let result = [];

while(score <= 100) {
    if(score >= 90) {
        result.push('A');
    } else if(score >= 80) {
        result.push('B');
    } else if(score >= 70) {
        result.push('C');
    } else if(score >= 60) {
        result.push('D');
    } else {
        result.push('F');
    }
    score++;
}
console.log(result.join(' '));