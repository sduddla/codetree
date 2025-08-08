const fs = require('fs');
const c = Number(fs.readFileSync(0).toString().trim());

if(c < 0) {
    console.log('ice');
} else if(c > 100) {
    console.log('vapor');
} else {
    console.log('water');
}