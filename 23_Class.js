class Person {
  constructor(name, age) {
    // constructor = 변수를 생성하기 위해 생성자 함수로
    // new로 객체를 만들시 자동으로 호출되어 실행되는 함수
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`안녕하세요, 저는 ${this.name}입니다.`);
  }
}

const p1 = new Person("김사과", 20);
console.log(p1.name);
console.log(p1.age);
p1.greet();

const p2 = new Person("배애리", 27);
console.log(p2.name);
console.log(p2.age);
p2.greet();
