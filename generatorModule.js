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
    while (--k > 0) {
      this.next();
    }
    return this.next().value;
  }
};

module.exports = GeneratorFunction;
