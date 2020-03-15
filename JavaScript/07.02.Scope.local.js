// -- Local Scope
// Zugriff nur innerhalb des Gültigkeitsbereiches

// --Function scope
function sayHello() {
  var hello = 'Hello Team Microsoft Solutions!';
  console.log(hello);
}

// sayHello();
// console.log(hello);

// // -- Block Scope
// // nur für const und let
// {
//   let hello = 'Hello Team Microsoft Solutions!';
//   console.log(hello);
// }

// console.log(hello);

// // -- lexical scoping
// // ein Scope kann auf seinen äußeren Scope zugreifen
// // Grundsätzlich wird beim Zugriff auf einen Variable zunächst geschaut, ob diese im aktuellen Scope definiert ist.
// // Anschließend werden die äußeren Scopes von innen nach außen durchsucht (bis global; wichtig bei der Verwendung von var).
// function outerFunction(message) {
//   console.log(message);
//   var outer = 'I come from outer';

//   function innerFunction() {
//     var inner = 'I come from inner';
//     console.log(inner, 'from inner');
//     console.log(outer, 'from inner');
//   }

//   console.log(outer, 'from outer');
//   innerFunction();
//   // console.log(inner, 'from outer');
// }

// outerFunction('foo');
