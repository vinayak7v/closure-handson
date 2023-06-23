//Q1
//   var counter = 0;

//   function IncreaseCounter() {
//       return counter += 1;
//   };

//   return IncreaseCounter;


// var counter = counter();
// console.log();(counter());
// console.log(); (counter());
// console.log();(counter());
// console.log();(counter());

// //Q2

// (function () {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();

// //Q3
// for (var i = 0; i < 3; i++) 
//   setTimeout(function log() {
//     console.log(i); // What is logged?
//   }, 1000);

// //Q4

// function outreFun(L){
//   function innerFun(B){
//     console.log(`Area: ${L*B}`);
//   }
//   innerFun(10);
// }
// outerFun(10);

// //Q5

// var i = 0;
// function outer(){
//   function inner(){
//     i += 1;
//     console.log(i);
//   }
//     inner();
// }
//    outer();
//    outer();
//    outer();
//    outer();

//    //Q6

var a = 12;
(function () {
  console.log(a);
})();

// //Q7

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    console.log(a);
  };
})();
x();