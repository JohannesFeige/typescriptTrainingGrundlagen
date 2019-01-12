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
