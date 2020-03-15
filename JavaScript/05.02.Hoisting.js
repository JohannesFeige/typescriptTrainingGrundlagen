// -- Function hoisting
// die Funktion wird an den Anfang des aktuellen Scopes verschoben:
// sayHello('Team Fixit');
// function sayHello(name) {
//   console.log(`Hello ${name}!`);
// }

// function sayHello2(name) {
//   console.log(`Hello ${name}!`);
// }
// sayHello2('Team Fixit');

// // nicht jedoch bei function expressions; auch nicht bei var:
// sayHello('Team Fixit');
// var sayHello = function(name) {
//   console.log(`Hello ${name}!`);
// };
