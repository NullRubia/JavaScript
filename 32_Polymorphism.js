class Animal {
  speak() {
    console.log("동물이 소리를 냅니다.");
  }
}

class Cat extends Animal {
  speak() {
    console.log("야옹~");
  }
}

class Dog extends Animal {
  speak() {
    console.log("멍멍!");
  }
}

const animals = [new Cat(), new Dog()];

for (let a of animals) {
  a.speak();
}
