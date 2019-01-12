function foo() {
  var messages = ['Hello', 'Team MS'];

  for (var i = 0; i < messages.length; i++) {
    setTimeout(function() {
      console.log(messages[i]);
    }, i * 1000);
  }
}

foo();

// function foo() {
//   var messages = ['Hello', 'Team MS'];

//   for (var i = 0; i < messages.length; i++) {
//     (function(value) {
//       setTimeout(function() {
//         console.log(messages[value]);
//       }, value * 1000);
//     })(i);
//   }
// }

// function foo() {
//     var messages = ['Hello', 'Team MS'];
  
//     for (let i = 0; i < messages.length; i++) {
//       setTimeout(function() {
//         console.log(messages[i]);
//       }, i * 1000);
//     }
//   }
  
//   foo();