class User {
  constructor(name) {
    this._name = name; // 실제 값은 밑줄(_)로 저장
  }

  // getter
  get name() {
    return this._name;
  }

  // setter
  set name(newName) {
    if (newName.length < 2) {
      console.log("이름은 두 글자 이상이어야 합니다.");
    } else {
      this._name = newName;
    }
  }
}

const user = new User("김사과");

console.log(user.name); //getter
user.name = "반"; //setter
user.name = "반하나"; //setter
console.log(user.name); //getter
