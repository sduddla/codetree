const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);

let a = input.slice(0, n).map(line => line.trim().split(' ').map(Number));
let b = input.slice(n, 2*n).map(line => line.trim().split(' ').map(Number));

const result = a.map((row, i) => row.map((v, j) => (v === b[i][j] ? 0 : 1)));

for(const row of result) {
    console.log(row.join(' '));
}
