require('./consoleUtils');

console.group('strict equality');
console.instruction("'42' === 42");
console.log('42' === 42);
console.groupEnd();

console.group('loose equality');
console.instruction("'42' == 42");
console.log('42' == 42);
console.groupEnd();
