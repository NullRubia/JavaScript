const obj = { name: "김사과", age: 20 };
const { name, age } = obj; //obj를 각각의 개체로 분할

console.log(name);
console.log(age);
console.log("--------------------------------");

function display({ name, age, address, job }) {
  console.log(name, age, address, job);
}

const apple = {
  name: "김사과",
  age: 20,
  address: { si: "서울시", gu: "서초구", dong: "양재동" },
};
const new_apple = { ...apple, job: "프로그래머" };

console.log(apple);
console.log("___________________________");
console.log(new_apple);
console.log("___________________________");
display(apple);
console.log("___________________________");
display(new_apple);

console.log("___________________________");
//const { pet = "루시" } = new_apple;
const { job: hobby } = new_apple;
// new_apple.job 속성 값을 변수 hobby에 저장합니다.
// 원래 이름은 job, 내가 쓰고 싶은 이름은 hobby!
console.log(hobby);
console.log("--------------------------------");

// styles라는 속성 안에 있는 color를 꺼냅니다.
const component = {
  name: "Button",
  styles: {
    size: 20,
    color: "black",
  },
};

function changeColor({ styles: { color } }) {
  console.log(color); // "black"
}

changeColor(component);
