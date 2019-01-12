
// #region statement
function printStatement(message) {
    console.log(message);

    return {
        result: 'success'
    };
}

printStatement('foo statement');

//#endregion

// expression
var printExpression = function(message) {
    console.log(message);

    return {
        result: 'success'
    };
}

printExpression('foo expression');

// anonymous
setTimeout(function () {
    console.log('done');
}, 1000)

// Funktionen können Eigenschaften haben:

printStatement.myProperty = 42;

console.log(printStatement.myProperty);

// function sayHello2(name) {
//   console.log(`Hello ${name}!`);
// }
// sayHello2('Team Microsoft Solutions', 'hallo');
// sayHello2();