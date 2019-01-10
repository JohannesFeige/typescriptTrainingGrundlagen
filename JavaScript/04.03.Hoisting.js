// -- Function hoisting
// die Funktion wird an den Anfang des aktuellen Scopes verschoben:
// sayHello('Team Microsoft Solutions');
// function sayHello(name) {
//   console.log(`Hello ${name}!`);
// }

// function sayHello2(name) {
//   console.log(`Hello ${name}!`);
// }
// sayHello2('Team Microsoft Solutions');

// // nicht jedoch bei function expressions; auch nicht bei var:
// sayHello('Team Microsoft Solutions'); // ReferenceError: sayHello is not defined
// const sayHello = function(name) {
//   console.log(`Hello ${name}!`);
// };

// function sayHello2(name) {
//   console.log(`Hello ${name}!`);
// }
// sayHello2('Team Microsoft Solutions', 'hallo');
// sayHello2();

'use strict';
x = 23;
console.log(x);
