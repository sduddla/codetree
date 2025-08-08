const fs = require('fs');
const ex = Number(fs.readFileSync(0).toString().trim());

if(ex === 3000) {
    console.log('book');
} else if (ex >= 1000) {
    console.log('mask');
} else {
    console.log('no');
}