require('./consoleUtils');

// Am Beispiel von String, Number, Boolean

//String explizit
console.group('String explizit');
console.instruction('String(42)');
console.log(`${String(42)} -> ${typeof String(42)}`);
console.groupEnd();

// String implizit
console.group('String implizit');
console.instruction(`typeof (42 + '')`);
console.log(`${42 + ''} -> ${typeof (42 + '')}`);
console.groupEnd();

// Number explizit
console.group('Number explizit');
console.instruction(`Number('42')`);
console.log(`${Number('42')} -> ${typeof Number('42')}`);
console.groupEnd();

// Number implizit
console.group('Number implizit');
console.instruction(`+'123'`);
console.log(`${+'123'} -> ${typeof +'123'}`);
console.groupEnd();

// Boolean explizit
console.group('Boolean explizit');
console.instruction('Boolean(42)');
console.log(Boolean(42));
console.groupEnd();

// Boolean implizit
console.group('Boolean implizit');
console.instruction(`if (42) { console.log('42 is truthy'); }`);
if (42) {
  console.log('42 is truthy');
}
console.instruction('!42');
console.log(!42);
console.instruction('!!42');
console.log(!!42);
console.instruction(42 || 'hello');
console.log(42 || 'hello');
console.groupEnd();
