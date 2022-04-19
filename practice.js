console.log("hello world!");
// name var
const firsName = "shawn";

// example to show hoisting, if job is defined after the console.log, it will get an initialization error
if (firsName === "shawn") {
  const job = "engineer";
  const age = 2022 - 1989;
  console.log("age: ", age);
  console.log(`Shawn is a ${job}`);
}

// Temporal Deadzone Practice (TDZ)

console.log(me);
console.log();
console.log();
