// 일반 함수
function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

// 화살표 함수
const add2 = (a, b) => a + b;
console.log(add2(3, 4));

// 매개변수가 1개일 땐 괄호 생략 가능
const square = (x) => x * x; //const square = x => x * x;
console.log(square(5));

// 코드 블록이 있을 경우 return을 명시해야 함
const add3 = (a, b) => {
  c = a + b;
  return c;
};
console.log(add(5, 6));

console.log("--------------------------------");

const obj = {
  name: "김사과",
  sayHello: function () {
    setTimeout(function () {
      console.log("안녕! 나는 " + this.name); //this는 가장 가까운 객체(setTimout=자기자신)에게서 찾음
    }, 1000);
  },
};
obj.sayHello(); // undefined (this가 윈도우를 가리킴)

// 화살표 함수로 고치면:
const obj2 = {
  name: "김사과",
  sayHello: function () {
    setTimeout(() => {
      console.log("안녕! 나는 " + this.name);
    }, 1000);
  },
};
obj2.sayHello(); //this가 obj2의 name을 가르켜 정상 작동됨
// 일반 함수 사용시 : this는 호출한 주체에 따라 결정됨
// 화살표 함수 사용시: 외부 스코프의 this를 유지함
