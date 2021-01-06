//implementing private in both Classes and Constructor functions
class Ani {
  #name;
  //#name is equal to calling private name in typescript
  #gut = "JumpCross";
  constructor(call) {
    this.#name = call;
  }
  //talk is a private method of the class Ani
  #talk = function () {
    return this.#gut;
  };

  say(){
    return this.#name + " " + this.#talk() 
  }
}

let mal = new Ani("Sadia");
console.log(mal.say());

function Anii(call) {
  // this.call = call
  let gut = "JumpCross";
  //talk function can not accessed outside this constructor function
  function talk() {
    return "Boy";
  }
  this.say = function () {
    return call +' '+ talk()+' ' + gut;
  };
  // private functions could be also be achieved in constructor function by 
  //using the encapsulation method
  //that is, instead of creating methods without `this` for privacy, we create
  //all the methods without privacy and return them all in one return call
  //as so
  //{
  //  functionOne,
  //  functionTwo, etc, etc 
  //}
  // only the functions returned will be usable outside Anii
}
let mel = new Anii("Saidu");
console.log(mel.say());
