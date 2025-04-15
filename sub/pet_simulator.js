const randomNames = [
  "나비",
  "뽀삐",
  "도담",
  "모찌",
  "토리",
  "마루",
  "토니",
  "야몽",
];
const petTypes = ["Dog", "Cat", "Hamster"];

class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.age = Math.floor(Math.random() * 100) / 10;
    this.energy = 50;
    this.hunger = 50;
  }

  getInfo() {
    return `이름: ${this.name} / 종류 : ${this.type} / 나이: ${this.age}세 / 에너지: ${this.energy} / 배고픔: ${this.hunger}`;
  }
  eat() {
    this.hunger = this.hunger - 30;
    this.energy = this.energy + 10;
    console.log(`${this.name}은(는) eat()을 했습니다.`);
    if (this.hunger < 0) this.hunger = 0;
    if (this.energy > 100) this.energy = 100;
  }

  play() {
    this.energy = this.energy - 20;
    this.hunger = this.hunger + 20;
    this.age = (this.age * 10 + 1) / 10;
    //그냥 + 0.1을 하게되면 2진수로 바꾸는 과정에서 딱 떨어지지 않아 근사값 오류 발생
    //따라서 X10을 해서 10진수로 변환후 계산한 후 다시 10으로 나누어 근사값 오류를 피함
    if (this.energy < 0) this.energy = 0;
    if (this.hunger > 100) this.hunger = 100;
    console.log(`${this.name}은(는) play()을 했습니다.`);
  }

  sleep() {
    this.energy = this.energy + 40;
    this.hunger = this.hunger + 10;
    if (this.energy > 100) this.energy = 100;
    if (this.hunger > 100) this.hunger = 100;
    console.log(`${this.name}은(는) sleep()을 했습니다.`);
  }

  speak() {
    console.log(`${this.name}은(는) 소리를 냅니다.`);
  }
}

class Dog extends Pet {
  constructor(name) {
    super(name, "Dog");
  }

  speak() {
    console.log(`[${this.type}] ${this.name}: 멍멍!`);
  }
}

class Cat extends Pet {
  constructor(name) {
    super(name, "Cat");
  }

  speak() {
    console.log(`[${this.type}] ${this.name}: 야옹!`);
  }
}

class Hamster extends Pet {
  constructor(name) {
    super(name, "Hamster");
  }

  speak() {
    console.log(`[${this.type}] ${this.name}: 찍찍!`);
  }
}

class PetManager {
  constructor() {
    this.pets = [];
  }
  addPet(pet) {
    this.pets.push(pet);
  }

  simulateDay(day) {
    console.log(`---Day${day}---`);
    this.pets.forEach(function (pet) {
      const actions = ["eat", "play", "sleep"];
      const action = actions[Math.floor(Math.random() * actions.length)];
      pet.speak();
      pet[action]();
    });
    this.showAllPets();
  }

  showAllPets() {
    console.log("\n펫 상태 목록:");
    this.pets.forEach(function (pet) {
      console.log(pet.getInfo());
    });
  }
}

function run() {
  const manager = new PetManager();

  const petCount = Math.floor(Math.random() * 3) + 3; // 3~5
  for (let i = 0; i < petCount; i++) {
    const name = randomNames[Math.floor(Math.random() * randomNames.length)];
    const type = petTypes[Math.floor(Math.random() * petTypes.length)];

    let pet;
    if (type === "Dog") pet = new Dog(name);
    else if (type === "Cat") pet = new Cat(name);
    else pet = new Hamster(name);

    manager.addPet(pet);
  }

  const days = Math.floor(Math.random() * 3) + 3; // 3~5
  for (let d = 1; d <= days; d++) {
    manager.simulateDay(d);
  }
}

// 실행
run();
