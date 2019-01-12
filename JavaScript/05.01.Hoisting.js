function hoist() {
  console.log(x);  
  var x = 23;
  console.log(x);  
}

hoist();