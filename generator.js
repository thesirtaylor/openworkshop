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

const xx = genx();

//extracting nth value
function iterableGenerator(values, generator, length) {
 if (Array.isArray(values)) {
   let n = 1;
   let arr = [];
   while (n <= length) {
     let a = generator.next().value;
     values.forEach((element) => {
       if (n === element) {
         arr.push(a);
       }
     });
     n++;
   }
   return arr;
 } else {
   let a = generator.next().value;
   let k = values;
   while (--k > 0) {
     generator.next();
   }
   return a;
 }
}

let j = iterableGenerator(3, xx, 5);
let y =  iterableGenerator([1,3], xx, 5);
// console.log(j);
console.log(y);
