function foo() {
  var messages = ['Hello', 'Team MS'];

  for (var i = 0; i < messages.length; i++) {
    setTimeout(function() {
      console.log(messages[i]);
    }, i * 1000);
  }
}

foo();
