function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`안녕하세요, 저는 ${this.name}입니다.`);
};

const p1 = new Person("김사과");
const p2 = new Person("반하나");

p1.sayHello();
p2.sayHello();
