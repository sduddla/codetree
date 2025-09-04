const fs = require('fs');
const s = fs.readFileSync(0).toString().trim();

const ex = ['apple', 'banana', 'grape', 'blueberry', 'orange'];

let result = [];
for(word of ex) {
    if(word[2] === s || word[3] === s) {
        result.push(word);
    }
}

if(result.length === 0) {
    console.log('0');
} else {
    console.log(result.join('\n'));
    console.log(result.length);
}