const person = {
  name: "김사과",
  age: 20,
  greet: function () {
    //console.log(`안녕하세요, 저는 ${this.name} 입니다.`);
    return `안녕하세요, 저는 ${this.name} 입니다.`; //this는 내 객체 안에 있는 속성
  },
};

console.log(person.name);
console.log(person.age);
//person.greet();
console.log(person.greet());
