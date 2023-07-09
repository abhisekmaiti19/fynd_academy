// synchronous
// asynchronous
//client side scripting

//type 1
// var a = 10;
// function first() {
//   var b = 11;
//   let second = () => {
//     var c = 12;
//     console.log(a, b, c);
//   };
//   second();
// }

// first();

// type 2
// var a = 10;
// (function first() {
//   var b = 11;
//   let second = () => {
//     var c = 12;
//     console.log(a, b, c);
//   };
//   second();
// })();

//type 3
// var a = 10;
// function first() {
//   var b = 11;
//   console.log(b);
//   let second = () => {
//     var c = 12;
//     console.log(a, b, c);
//   };
//   return second;
// }

// let val = first()();
// // val();
// console.log(val);

// Variable Hoisting
//exmp 1
// console.log(b);
// var b = 10;

//exmp 2
// var b;
// console.log(b);
// b = 10;
