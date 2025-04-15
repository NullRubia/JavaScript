/*
for (let dan = 2; dan <= 9; dan++) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`);
  }
}
*/

let dan = 2;

while (dan <= 9) {
  let i = 1;
  while (i <= 9) {
    console.log(`${dan} x ${i} = ${dan * i}`);
    i++;
  }
  dan++;
}
