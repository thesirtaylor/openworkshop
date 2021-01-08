let GeneratorFunction = Object.getPrototypeOf(function* () {});
GeneratorFunction.prototype.nths = function (values, length) {
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
    return new Error(
      "Function takes an array of Yields as first argument, index starts from 1.\n *** for example \n \t generator.nths([1,4,6], 9) yields the 1st, 4th and 6th values of a generator function which has 9 possible yields\n"
    );
  }
};
GeneratorFunction.prototype.nth = function (values) {
  if (!Array.isArray(values)) {
      // this.next().value;
    while (--values > 0) {
      this.next();
    }
    return this.next().value;
  } else {
    return new Error(
      "Function takes a single value as first arguement, index starts from 1.\n *** for example \n \t generator.nth(1, 9) yields the 1st value of a generator function which has 9 possible yields\n"
    );
  }
};
module.exports = GeneratorFunction;
