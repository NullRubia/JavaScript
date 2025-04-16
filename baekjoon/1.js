//const input = fs.readFileSync("input.txt").toString().split(" ");
//const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
let T = parseInt(input[0]);
let L = [];
L[1] = 1;
L[2] = 2;
L[3] = 4;

for (i = 4; i < 11; i++) {
  L[i] = L[i - 1] + L[i - 2] + L[i - 3];
}

for (j = 1; j < T + 1; j++) {
  N = parseInt(input[j]);
  console.log(L[N]);
}
