class Animal {
  speak() {
    console.log("동물이 소리를 냅니다.");
  }
}

class Dog extends Animal {
  eat() {
    console.log("강아지가 먹습니다");
  }
  speak() {
    console.log("강아지가 소리를 냅니다.");
  } //오버라이딩 = 부모클래스와 같은 속성을 덮어쓰면 자식 클래스의 속성이 우선시됨
}

const animal = new Animal();
animal.speak();
//animal.eat(); //부모 클래스에서는 자식클래스의 메서드를 사용하지 못함

const dog = new Dog();
dog.speak();
dog.eat();
