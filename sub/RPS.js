/*
Math.random(): 0이상 1미만의 임의의 소수를 생성하는 함수
Math.floor(): 소수점을 버리는 함수
*/

const RPS = ["가위", "바위", "보"];
const UserIndex = Math.floor(Math.random() * RPS.length);
const ComIndex = Math.floor(Math.random() * RPS.length);
const UserRPS = RPS[UserIndex];
const ComRPS = RPS[ComIndex];
let score;

if (UserRPS == ComRPS) {
  score = "무승부";
} else if (UserRPS != ComRPS) {
  if (UserRPS == "가위" && ComRPS == "바위") {
    score = "패배";
  } else if (UserRPS == "가위" && ComRPS == "보") {
    score = "승리";
  } else if (UserRPS == "바위" && ComRPS == "보") {
    score = "패배";
  } else if (UserRPS == "바위" && ComRPS == "가위") {
    score = "승리";
  } else if (UserRPS == "보" && ComRPS == "가위") {
    score = "패배";
  } else if (UserRPS == "보" && ComRPS == "바위") {
    score = "승리";
  }
}
console.log("사용자 : " + UserRPS);
console.log("컴퓨터 : " + ComRPS);
console.log("결과 : " + score);
