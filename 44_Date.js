// 현재 날짜와 시간
const now = new Date();
console.log("현재:", now.toString());

// 연도, 월, 일 꺼내기
console.log("연도:", now.getFullYear());
console.log("월:", now.getMonth() + 1); // 0부터 시작하므로 +1
console.log("일:", now.getDate());

// 특정 날짜 만들기
const birthday = new Date(2024, 4, 15);
console.log("생일:", birthday.toDateString());

// 날짜 차이 계산
const nowTime = now.getTime();
const birthTime = birthday.getTime();
const diffDays = Math.floor((nowTime - birthTime) / (1000 * 60 * 60 * 24));
console.log(`태어난 지 ${diffDays}일 지남`);
