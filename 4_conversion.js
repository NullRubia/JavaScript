console.log(10 + 20); //숫자형
console.log(10 + "20"); //숫자형+문자형을 진행하면 자동적으로 문자형으로 변환 인식하여 문자형 더하기로 출력
console.log("3" * "5"); //문자형은 곱하기가 되지 않기때문에 안에 들어있는 값이 숫자이기때문에 자바스크립트에서 자동으로 숫자형으로 형을 변환하여 계상
console.log(1 - "일"); //숫자가 아님을 의미하는 특별한 값입니다.

const num1 = "10";
const num2 = "3.5";
const num3 = 5;
console.log(`현제 num1의 타입: ${typeof num1}`);
// console.log("현제 num1의 타입:", typeof(num1));
console.log(`Number(num1)의 타입: ${typeof Number(num1)}`);
//console.log("Number(num1)의 타입:", typeof(Number(num1)));
console.log(`현제 num3의 타입: ${typeof num3}`);
console.log(`현제 num3의 타입: ${typeof String(num3)}`);
console.log(`Boolean(num3)의 타입: ${typeof Boolean(num3)}, ${Boolean(num3)}`);
console.log(`Object(num1)의 타입: ${typeof Object(num1)}, ${Object(num1)}`);
console.log(
  `parseInt(num2)의 타입: ${typeof parseInt(num2)}, ${parseInt(num2)}`
);
console.log(
  `parseFloat(num2)의 타입: ${typeof parseFloat(num2)}, ${parseFloat(num2)}`
);
