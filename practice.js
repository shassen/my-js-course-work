// The Complete Javascript Course 2022: Section 8: How JS works behind the scenes

// ----- Temporal Deadzone Practice (TDZ) BEGIN ------

// main notes (programming best practice):
// - Always define vars at the top of code
// - Always use const or let, never var
// - Always declare all functions first and use only after declaration
// - let and const are not declared on the window object but var is

// this example shows that all variable types need to be defined before used in the code
// var's will be undefined if called before initialization, let and const will be a ref error not initialized yet

var me = "Shawn";
let job = "Engineer";
const year = 1989;

// console.log("me: ", me);
// console.log("job: ", job);
// console.log("year: ", year);

// Functions

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => {
  return a + b;
};

// console.log("add decl: ", addDecl(2, 3));
// console.log("add expr: ", addExpr(4, 5));
// console.log("add arrow: ", addArrow(6, 7));

// pitfalls of hoisting:
// in the block below, if the var is above if block, it will work. If var is below if, this will execute prematurely

if (!numProducts) {
  //   deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

// this shows that vars are declared on the window object and let, const are not
var x = 1;
let y = 2;
const z = 3;

// console.log("x: ", x === window.x); // true
// console.log("y: ", y === window.y); // false
// console.log("z: ", z === window.z); // false

// ------- Temporal Deadzone END --------

// ------- THIS KEYWORD BEGIN --------

// this keyword in declared funcs and arrow funcs example:
const shawn = {
  name: "Shawn",
  year: 1989,
  // declared functions have access to this
  calcAgeFunc: function () {
    console.log("year: ", this.year);
    return 2022 - this.year;
  },
  // arrow functions do not have access to this
  calcAgeArrow: () => {
    return 2022 - this.year;
  },
};
// console.log("shawn calcAgeFunc result: ", shawn.calcAgeFunc());
// console.log("shawn calcAgeArrow result: ", shawn.calcAgeArrow());

// console.log("this at global scope: ", this);

const calcAge = function (birthYear) {
  console.log("in func declaration: ", 2022 - birthYear);
  console.log("this in func declaration: ", this);
};
// calcAge(1989);

// this works in this case because it uses lexical scope meaning it gets this from the window
// this keyword ALWAyS points to the method that calls it
const calcAgeArrow = (birthYear) => {
  console.log("in arrow: ", 2022 - birthYear);
  console.log("this in arrow: ", this);
};
// calcAgeArrow(1989);

// this returns the object keys when in an object
// const shawn = {
//   year: 1989,
//   calcAgeMethod: function () {
//     console.log("inside shawn.calcAgeMethod: ", this);
//   },
// };
// shawn.calcAgeMethod();
// ------- THIS KEYWORD END ----------

// let x = "hello";
// var y = "hi";

const greet = () => {
  console.log("x: ", x);
  console.log("y: ", y);
  console.log(this);
  console.log("calling x with this: ", `${this.x} Carol!`);
  console.log("calling y with this: ", `${this.y} Carol!`);
};
// greet();

// console.log("x on window: ", this.x);
// console.log("y on window: ", this.y);
