/*
let count = 1;
while (count <= 5) {
  console.log(count); 
}
//무한루프 컨트롤+C로 멈춤
*/
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}

let dan = 2;

while (dan <= 9) {
  let i = 1;
  while (i <= 9) {
    console.log(`${dan} x ${i} = ${dan * i}`);
    i++;
  }
  dan++;
}
