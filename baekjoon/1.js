//const input = fs.readFileSync("input.txt").toString().split(" ");
//const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n").map(Number);
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let b1 = b % 10;
let b2 = parseInt((b % 100) / 10);
let b3 = parseInt(b / 100);

console.log("|\\_/|");
console.log("|q p|   /}");
console.log('( 0 )"""\\');
console.log('|"^"`    |');
console.log("||_/=\\\\__|");

console.log("-------------------------------");
console.log("|\\_/|");
console.log("|q p|   /}");
console.log('( 0 )"""\\');
console.log('|"^"`    |');
console.log("||_/=\\\\__|");

console.log("-------------------------------");
console.log('|\\_/|\n|q p|   /}\n( 0 )"""\\\n|"^"`    |\n||_/=\\\\__|');
