let names = ["김사과", "반하나", "오렌지"];

// for문
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
console.log("-------------------------------------");
// for...of
for (let name of names) {
  console.log(name);
}
console.log("-------------------------------------");
// forEach
names.forEach(function (name) {
  console.log(name);
});
console.log("-------------------------------------");
