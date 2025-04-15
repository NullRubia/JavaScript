const person = new Object(); //new = 객체를 빈 상태로 만들고, 나중에 속성 추가.
// Object 객체 자바스크립트의 내장 객체인 Object는 모든 객체의 최상위 부모(프로토타입의 기반)이자,
// 객체를 생성하고 조작하기 위한 기본 도구입니다. Object는 객체를 만들 수 있는 생성자이면서,
// 객체의 속성(프로퍼티)을 다루기 위한 다양한 메서드들을 제공합니다.
// 따라서 모든 객체는 Object에서 출발하며, 공통 기능은 Object.prototype에 정의되어 있습니다.

person.name = "반하나"; //person이라는 객체에 name이라는 속성이 없다면 해당 속성을 추가
person.age = 25; //person이라는 객체에 age이라는 속성이 없다면 해당 속성을 추가
person.greet = function () {
  console.log(`안녕하세요, 저는 ${this.name}입니다.`);
}; //person이라는 객체에 greet이라는 속성이 없다면 해당 속성을 추가

person.greet();
