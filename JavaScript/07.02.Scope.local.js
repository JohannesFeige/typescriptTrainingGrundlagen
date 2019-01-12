// // -- Local Scope
// // Zugriff nur in bestimmten Bereichen des Codes

// // --Function scope
// function sayHello() {
//   let hello = 'Hello Team Microsoft Solutions!';
//   console.log(hello);
// }

// sayHello();
// console.log(hello); // ReferenceError: hello is not defined

// // -- Block Scope
// // nur für const und let
// {
//   const hello = 'Hello Team Microsoft Solutions!';
//   console.log(hello);
// }

// console.log(hello); // ReferenceError: hello is not defined

// // -- lexical scoping
// // ein Scope kann auf seinen äußeren Scope zugreifen
// // Grundsätzlich wird beim Zugriff auf einen Variable zunächst geschaut, ob diese im aktuellen Scope definiert ist.
// // Anschließend werden die äußeren Scopes von innen nach außen durchsucht (bis global; wichtig bei der Verwendung von var).
// function outerFunction() {
//   const outer = 'I come from outer';

//   function innerFunction() {
//     const inner = 'I come from inner';
//     console.log(outer);
//   }

//   innerFunction();
//   console.log(inner); // ReferenceError: inner is not defined
// }

// outerFunction();

var foo = 'first';
function func() {
  var foo = 'second';
  console.log(foo);
}

console.log(foo);
func();
console.log(foo);
if (true) {
  var foo = 'third';
  console.log(foo);
}
console.log(foo);
