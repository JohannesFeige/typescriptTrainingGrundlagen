var changeMe = 'changeMe';
var changeMe = 'first change';
if (true) {
  var changeMe = 'second change';
}

var change = function() {
  var changeMe = 'third change';
};

change();

console.log(changeMe);
