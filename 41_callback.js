// setTimeout()은 첫 번째 인자로 함수(콜백 함수)를 받고, 두 번째 인자로 얼마나 뒤에 실행할지(ms)를 받습니다.
/*
console.log("물 끓이기 시작!");

setTimeout(function () {
  console.log("면 넣기!");
}, 3000); // 3초 후에 실행

console.log("계란 준비하기!");
*/

/* //위 코드 일반 함수로 선언하는 방법
function test() {
  console.log("면넣기");
} //setTimeout()내에 익명함수로 작성하는것이 아닌 이렇게 따로 선언하면 메모리에 미리 올라가있어
//메모리 공간을 차지함으로 setTimeout()으로만 실행할 함수는 setTimeout()내에 익명 함수로 선언하는것이 권장
console.log("물 끓이기 시작!");
setTimeout(test, 3000); //setTimeout(test(), 3000);로 작성하면 오류 발생
//test로 함수가 가르치는 주소값만 설정
console.log("계란 준비하기!");
*/

function greet(name, callback) {
  console.log("안녕, " + name + "!");
  callback(); // 나중에 호출됨
}

function sayBye() {
  console.log("잘 가~");
}

greet("김사과", sayBye);
console.log("--------------------------------");

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2, 4, 6, 8]
console.log("--------------------------------");

function doSomething(callback) {
  console.log("작업 시작!");
  callback();
}

doSomething(() => {
  console.log("작업 완료!");
});
console.log("--------------------------------");

const calc_add = (a, b) => a + b;
const calc_multiply = (a, b) => a * b;

function calculater(num1, num2, action) {
  if (num1 < 0 || num2 < 0) return; // 두 값이 0보다 작을 일시 함수를 종료

  const result = action(num1, num2);
  return result;
}

console.log(calculater(10, 3, calc_add));
console.log(calculater(10, 3, calc_multiply));
