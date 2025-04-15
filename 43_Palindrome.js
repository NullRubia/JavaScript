/*
 회문(거꾸로 읽어도 똑같은 단어)
 회문을 재귀함수(함수가 함수를 부르는 형태)를 통해 체크하는 프로그램을 만들어 보자.
*/
function isPalindrome(str, left = 0, right = null) {
  //초기값 세팅
  if (right === null) {
    //만약 첫 실행이라면
    right = str.length - 1;
  }
  if (left >= right) return true;
  if (str[left] !== str[right]) return false;

  return isPalindrome(str, left + 1, right - 1);
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("역삼역"));
