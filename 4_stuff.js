// ___________SCOPE EXAMPLE__________________________________________

// let globalAge = 23; // This is a global variable

// // This is a function - and hey, a curly brace indicating a block
// function printAge(age) {
//   var varAge = 34; // This is a function scoped variable

//   // This is yet another curly brace, and thus a block
//   if (age > 0) {
//     const constAge = age * 2;
//     console.log(constAge);
//   }
//   console.log("VarAge " + varAge);
// }

// printAge(globalAge);
// // printAge(23) --> 23*2 = 46

// _____________ANOTHER EXAMPLE____________________________________

// function makeAdding(firstNumber) {
//   // "first" is scoped within the makeAdding function
//   const first = firstNumber;

//   return function resulting(secondNumber) {
//     // "second" is scoped within the resulting function
//     const second = secondNumber;
//     return first + second;
//   };
// }
// // but we've not seen an example of a "function"
// // being returned, thus far - how do we use it?

// const add5 = makeAdding(5); // 5 is firstNumber

// console.log(add5(2)); //
// // Logs 7

// ___________________MORE OBJECTS______________________________________________

const name = "Bob";
const age = 28;
const color = "red";

const nowFancyObject = { name, age, color };

console.log({ name, age, color });

// DECONSTRUCTING OBJECTS

const obj = { a: 1, b: 2 };
const { a, b } = obj;
// This creates two variables, a and b,
// which are equivalent to
// const a = obj.a;
// const b = obj.b;

const array = [1, 2, 3, 4, 5];
const [zerothEle, firstEle] = array;
// This creates zerothEle and firstEle, both of which point
// to the elements in the 0th and 1st indices of the array
