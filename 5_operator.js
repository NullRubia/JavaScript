let num = 10;
num++;
console.log(num);
++num;
console.log(num);
let result = 0;
result = ++num; //num이 ++ 된 상태로 result에 저장됨(++가 앞에 있는경우 = 보다 우선순위가 높음)
console.log(result);
result = num++; //num이 result에 저장된 후에 num이 ++됨
console.log(result);
console.log("----------------------------------------------------");

let a = 23; // 10111
let b = 14; // 01110

console.log(a & b); // 00110 ->6 (AND)
console.log(a | b); // 11111 -> 31 (OR)
console.log(a ^ b); // 11001 (XOR)
console.log(~a); // 010111 -> 101000(NOT) 보통 32비트 연산(6자리)
console.log(a << 1); // 10 (왼쪽으로 1비트 이동)
console.log(a >> 1); // 2 (오른쪽으로 1비트 이동)
