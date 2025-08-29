const fs = require('fs');
const [gender, age] = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

if(gender === 0 && age >= 19) {
    console.log('MAN');
} else if(gender === 0 && age < 19) {
    console.log('BOY');
} else if(gender === 1 && age >= 19) {
    console.log('WOMAN');
} else if(gender === 1 && age < 19) {
    console.log('GIRL');
}