class User {
  #password = "";

  constructor(userid, password) {
    this.userid = userid;
    this.#password = password;
  }

  checkPassword(input) {
    return this.#password === input;
  }
}

const user = new User("apple", "1111");

console.log(user.userid);
console.log(user.checkPassword("1111"));
console.log(user.checkPassword("wrong"));

// console.log(user.#password);
// Private field '#password' must be declared in an enclosing class
