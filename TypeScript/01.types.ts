// string
let title: string = 'TS Basics';
// title = 42;

// number
let attendees: number = 20;
// attendees = 'foo';

// boolean
let prepared: boolean = true;
prepared = false;
// hasHobbies = 1;

// array
let topics: any[] = ['JS Types', 'TS Types'];
topics.push(100);

// tuples
let topic: [string, number] = ['JS Types', 10];
// let topic: [string, number] = [10, 'JS Types'];

// enums
enum Direction {
  up,
  down,
  left,
  right
}

// any
let trainingLocation: any = 'Jesteburg';
console.log(trainingLocation);
trainingLocation = { city: 'Jesteburg', street: 'Training street' };
console.log(trainingLocation);

// functions
function returnAttendees(): number {
  return attendees;
}

console.log(returnAttendees());

// void
function printTitle(): void {
  console.log(title);
  //   return title;
}

// argument types
function add(a, b): number {
  return a + b;
}

console.log(add(1, 2));

function multiply(a: number, b: number): number {
  return a * b;
}

console.log(multiply(2, 3));

// function types
let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;
console.log(myMultiply(3, 4));

// optionale Parameter, default Parameter
function concat(val1: string, val2: string = 'Team', val3?: string): string {
  return `${val1} ${val2} ${val3 || ''}`;
}

console.log(concat('Hello'));

console.log(concat('Hello', 'Team'));

console.log(concat('Hello', 'Team', 'MS'));

// objects
let training: { title: string; attendees: number } = {
  title: 'TS Basics',
  attendees: 20
};

training = {
  attendees: 15,
  title: 'other title'
};

// complex type:
let typeScriptTraining: Training = {
  title: 'TS Basics',
  topics: ['JS Types', 'TS Types'],
  getTopicsAmount: function(f: string): number {
    return this.topics.length;
  }
};

let angularTraining: Training = {
  title: 'ng Basics',
  topics: ['Components', 'ng Testing'],
  getTopicsAmount: function(f: string): number {
    return this.topics.length;
  }
};

// type Training = {
//   title: string;
//   topics: string[];
//   getTopicsAmount: (filter: string) => number;
// };

interface Training {
  title: string;
  topics: string[];
  getTopicsAmount: (filter: string) => number;
}

// union types
let age: number | string = 30;
age = '30';

// check types
let finalValue = 'A String';
if (typeof finalValue == 'number') {
  console.log('Final value is a number');
}

// never
// dieser Teil des Codes wird nie etwas zurückgeben (auch nicht void)!
function throwError(): never {
  throw new Error('An error!');
}
