function Person(name, age) {
  this.name = name;
  this.age = age;
  this.geet = function () {
    console.log(`안녕하세요, 저는 ${this.name}입니다.`);
  };
}

//Person("이메론", 30); 로만 선언시에 한번 동작후 가비지컬렉터에 의해 바로 삭제됨
const p1 = new Person("이메론", 30); //변수에 값을 저장해줌을 통해 값이 남아있음
console.log(p1.name);
console.log(p1.age);
p1.geet();

const p2 = new Person("배애리", 27);
console.log(p2.name);
console.log(p2.age);
p2.geet();
