class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, color) {
    super(name); // Animal의 constructor 호출
    this.color = color;
  }

  showInfo() {
    console.log(`${this.name}는 ${this.color} 강아지입니다.`);
  }
  setColor(color) {
    this.color = color;
  }
}

const animal = new Animal("코끼리");
console.log(animal.name);

const dog = new Dog("루시", "흰색");
dog.setColor("검은색");
dog.showInfo();
