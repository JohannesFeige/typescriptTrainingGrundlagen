// -- Global Scope
// überall verwendbar
const hello = 'Hello Team Fixit!';

function sayHello() {
  console.log(hello);
}

console.log(hello);
sayHello();

// -- Achtung: Naming collisions
var title = 'TS Basics';
var title = 'TS Tutorial'; // this will overwrite the first declaration
console.log(title);
