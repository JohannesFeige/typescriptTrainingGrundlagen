// string
var title = 'TS Basics';
// title = 42;
// number
var attendees = 20;
// attendees = 'foo';
// boolean
var prepared = true;
prepared = false;
// hasHobbies = 1;
// array
var topics = ['JS Types', 'TS Types'];
topics.push(100);
// tuples
var topic = ['JS Types', 10];
// let topic: [string, number] = [10, 'JS Types'];
// enums
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
// any
var trainingLocation = 'Jesteburg';
console.log(trainingLocation);
trainingLocation = { city: 'Jesteburg', street: 'Training street' };
console.log(trainingLocation);
// functions
function returnAttendees() {
    return attendees;
}
console.log(returnAttendees());
// void
function printTitle() {
    console.log(title);
    //   return title;
}
// argument types
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));
// function types
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(3, 4));
// optionale Parameter, default Parameter
function concat(val1, val2, val3) {
    if (val2 === void 0) { val2 = 'Team'; }
    return val1 + " " + val2 + " " + (val3 || '');
}
console.log(concat('Hello'));
console.log(concat('Hello', 'Team'));
console.log(concat('Hello', 'Team', 'MS'));
// objects
var training = {
    title: 'TS Basics',
    attendees: 20
};
training = {
    attendees: 15,
    title: 'other title'
};
// complex type:
var typeScriptTraining = {
    title: 'TS Basics',
    topics: ['JS Types', 'TS Types'],
    getTopicsAmount: function (f) {
        return this.topics.length;
    }
};
var angularTraining = {
    title: 'ng Basics',
    topics: ['Components', 'ng Testing'],
    getTopicsAmount: function (f) {
        return this.topics.length;
    }
};
// union types
var age = 30;
age = '30';
// check types
var finalValue = 'A String';
if (typeof finalValue == 'number') {
    console.log('Final value is a number');
}
// never
// dieser Teil des Codes wird nie etwas zurückgeben (auch nicht void)!
function throwError() {
    throw new Error('An error!');
}
