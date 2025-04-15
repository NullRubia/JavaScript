/*
let age = 13;

if (age >= 18) {
  console.log("성인입니다.");
} else if (age >= 13) {
  console.log("청소년입니다.");
} else if (age >= 6) {
  console.log("어린이입니다.");
} else {
  console.log("유아입니다.");
}
*/

let kor = 100;
let eng = 76;
let math = 95;
let total = kor + eng + math;
let avg = total / 3;
let grade;
//평균을 기준으로 90이상 A, 80 이상 B, 70 이상 C, 60이상 D, 나머지 F

if (avg >= 90) {
  grade = "A";
} else if (avg >= 80) {
  grade = "B";
} else if (avg >= 70) {
  grade = "C";
} else if (avg >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log("총점:", total);
console.log("평균:", avg);
console.log("학점:", grade);
