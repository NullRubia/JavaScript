// 현재 날짜와 시간
const now = new Date();
console.log("현재:", now.toString());
console.log("--------------------------------");

// 연도, 월, 일 꺼내기
console.log("연도:", now.getFullYear());
console.log("월:", now.getMonth() + 1); // 0부터 시작하므로 +1
console.log("일:", now.getDate());
console.log("--------------------------------");

// 특정 날짜 만들기
const birthday = new Date(1999, 5, 27);
console.log("생일:", birthday.toDateString());
console.log("--------------------------------");

// 날짜 차이 계산
const nowTime = now.getTime();
const birthTime = birthday.getTime();
const diffDays = Math.floor((nowTime - birthTime) / (1000 * 60 * 60 * 24));
console.log(`태어난 지 ${diffDays}일 지남`);
console.log("--------------------------------");

console.log(nowTime); // 1970년 1월 1일 0시 0분 부터 1000분의 1초씩 계속 증가하는 숫자
