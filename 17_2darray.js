let matrix = [
  [1, 2, 3], // 0번째 행
  [4, 5, 6], // 1번째 행
  [7, 8, 9], // 2번째 행
];
/*
console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6
console.log(matrix[2][1]); // 8
*/

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
  }
}

console.log("--------------------------------------");
let menuBoard = [
  ["🍔 불고기버거", "🍟 감자튀김", "🥤 콜라"],
  ["🍔 치즈버거", "🌭 핫도그", "🍹 사이다"],
  ["🍔 새우버거", "🍗 치킨너겟", "🍵 녹차"],
];

// 메뉴판 출력
for (let row = 0; row < menuBoard.length; row++) {
  let line = "";
  for (let col = 0; col < menuBoard[row].length; col++) {
    line += menuBoard[row][col] + "\t"; //\t는 탭문자
  }
  console.log(line);
}
