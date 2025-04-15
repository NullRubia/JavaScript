const proto = {
  greet: function () {
    console.log(`안녕하세요, 저는 ${this.name}입니다.`);
  },
};
/*
const person = {
  greet: function () {
    console.log(`안녕하세요, 저는 ${this.name}입니다.`);
  },
  name : "김사과",
  age : 20,
};
*/

const person = Object.create(proto); //person이란 이름으로 proto에 대한 복사본을 생성
person.name = "김사과"; // person에 name과 age 속성을 추가
person.age = 20; // 복사본에 name과 age 속성을 추가한것으로 원본인 proto에는 해당 속성이 추가되지 않음
person.greet();
