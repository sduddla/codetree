const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim());

if((input % 4 === 0) && (input % 100 !== 0) || (input % 400 === 0)) {
    console.log('true');
} else {
    console.log('false');
}