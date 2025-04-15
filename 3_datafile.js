//기본형(primitlve Type)
let num = 20; // 숫자
let str = "Hello, JS!"; // 문자열
let isReady = true; // 불리언
let nothing = null; // null
let notDefined; // undefined (선언만 하고 값 없음)
let bigNumber = 1234567890123456789012345678901234567890n; // BigInt
let unique = Symbol("id"); // Symbol

console.log("기본형 타입 출력:");
console.log("num:", num);
console.log("str:", str);
console.log("isReady:", isReady);
console.log("nothing:", nothing);
console.log("notDefined:", notDefined);
console.log("bigNumber:", bigNumber);
console.log("unique:", unique);

//참조형
let obj1 = { name: "apple" }; //obj1은 { name: "apple" }의 주소를 가르킴
console.log(obj1.name); //obj1에 name 에 할당된 값을 출력
let obj2 = obj1; //obj1과 obj2는 같은 주소를 가르킴
obj2.name = "banana"; //obj2.name의 할당된 값을 banana로 변경
console.log(obj2.name); //banana가 출력됨
console.log(obj1.name); //obj1과 obj2는 같은 주소를 가르킴으로 obj2.name의 값을 변경하면 obj 1도 변경됨

//참조형2
let person = { name: "apple", age: 20 }; // 객체
let numbers = [1, 2, 3, 4, 5]; // 배열
let greet = function () {
  // 함수
  return "안녕하세요!";
};
let now = new Date(); // 날짜 객체

console.log("\n참조형 타입 출력:");
console.log("person:", person);
console.log("numbers:", numbers);
console.log("greet():", greet());
console.log("now:", now);

let num1 = 10;
let num2 = 5;

//10 * 5 =50
console.log(num1, "*", num2, "=", num1 * num2);
console.log(`${num1} * ${num2} = ${num1 * num2}`);

let person = { name: "apple" };
let copy = person;
person = null;
