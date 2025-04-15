/*함수 선언 방식 1
sayHello();
function sayHello() {
  console.log("안녕하세요!");
}
console.log("-----------------------------------");
*/
//함수 선언 방식 2
const sayHello = function () {
  console.log("안녕하세요!");
};
sayHello();

//const 및 let으로 작성시 호이스팅이 발생은 하지만 변수나 함수가 코드 아래쪽에 있다면
//접근하지 못하도록 막습니다.
//호이스팅이란?
//자바스크립트가 코드를 실행하기 전에, 변수와 함수 선언을 "끌어올리는" 동작을 말합니다.
//즉, 변수나 함수가 코드의 아래쪽에 있어도, 위쪽에 있는 것처럼 동작하는 현상입니다.
console.log("-----------------------------------");

//1. 매개변수가 없는 함수
function showMessage() {
  console.log("환영합니다!");
}

showMessage();

console.log("-----------------------------------");
//2. 매개변수가 있는 함수
function greet(name) {
  console.log("안녕하세요, " + name + "님!");
}

greet("김사과");

console.log("-----------------------------------");
//3. 리턴이 있는 함수
function add(a, b) {
  return a + b;
}

let result = add(3, 5);
console.log(result);

console.log("-----------------------------------");
//4. 기본값이 있는 함수
function greet(name = "게스트") {
  console.log("안녕하세요, " + name + "님!");
}

greet();
greet("김사과");

console.log("-----------------------------------");
//5. 가변매개변수 함수
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4));

console.log("-----------------------------------");
//6. 즉시 실행 함수
(function () {
  console.log("이건 즉시 실행 함수입니다!");
})();

console.log("-----------------------------------");
//7. 함수 안에 함수(중첩함수)
function outer() {
  function inner() {
    console.log("안쪽 함수 실행!");
  }
  inner();
}

outer();

console.log("-----------------------------------");
//8. 함수에서 함수를 반환(고차함수)
function createGreeting(message) {
  return function () {
    console.log(message + "님!");
  };
}

const hello = createGreeting("안녕하세요");
hello();
