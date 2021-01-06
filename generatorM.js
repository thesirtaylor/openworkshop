let GeneratorFunction = Object.getPrototypeOf(function* () {});
GeneratorFunction.prototype.nth = function (values, length) {
  if (Array.isArray(values)) {
    let n = 1;
    let arr = [];
    while (n <= length) {
      let a = this.next().value;
      values.forEach((element) => {
        if (n === element) {
          arr.push(a);
        }
      });
      n++;
    }
    return arr;
  } else {
    let a = this.next().value;
    let k = values;
    while (--k > 0) {
      this.next();
    }
    return a;
  }
};
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

let xy = genx();
let yy = geny();
console.log(xy.nth([1,3],5));
console.log(yy.nth([2, 3], 5));
console.log(xy.nth([1, 2], 5));
