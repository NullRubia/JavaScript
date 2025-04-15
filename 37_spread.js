const fruits = ["사과", "바나나"];
const newFruits = [...fruits, "포도"];
console.log(newFruits);
console.log("--------------------------------");

// arr2는 arr1의 복사본 (같은 값이지만 서로 다른 배열)
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // 새 배열 생성

const a = [1, 2];
const b = [3, 4];
const result = [...a, ...b]; //배열 합치기
console.log(result);
console.log("--------------------------------");

function add(x, y, z) {
  return x + y + z;
}

const nums = [1, 2, 3];
console.log(add(nums[0], nums[1], nums[2]));
console.log(add(...nums)); // 6
console.log("--------------------------------");

const person = { name: "김사과", age: 20 };
const copy = { ...person }; //객체 복사
console.log(copy);
console.log("--------------------------------");

const c = { name: "김사과" };
const d = { age: 20 };
const merged = { ...c, ...d }; //c와 d가 합쳐짐
console.log(merged);
