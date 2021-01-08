let mobile = require('./generatorM');
function* genx() {
  yield {
    name: "paul",
    age: 25,
  };
  yield "Calculus";
  yield 23;
  yield ["age", 17, { day: "Monday" }];
  return 5;
}
function* geny() {
  yield {
    name: "paul",
    age: 25,
  };
  yield "Calculus";
  yield 23;
  yield ["age", 17, { day: "Monday" }];
  return 5;
}

console.log(genx().nth(4));
console.log(genx().nth(5));
// console.log(genx().nths([1,2], 5));
// console.log(genx().nths([2, 3], 5));
console.log(genx().nths([1, 2, 3], 5));
console.log(genx().nths([1, 2, 3], 5));