class MathTool {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  static add(a, b) {
    // constructor는 객체를 생성할때 힙에 올라가는 반면,
    // static은 프로그램 실행시 무조건 적으로 힙에 먼저 올라가며 프로그램이 종료될때 까지
    // 메모리에서 삭제되지 않음.
    return a + b;
  }
  subtract() {
    return this.num1 - this.num2;
  }
}

console.log(MathTool.add(3, 4)); // 출력: 7
// MathTool 인스턴스를 만들지 않아도 사용 가능
const mathtool = new MathTool(4, 3);
console.log(mathtool.subtract());
