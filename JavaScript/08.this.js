// Abhängig vom Aufruf:
function foo() {
  console.log(this);
}

myObj = {
  foo() {
    console.log(this);
  }
};
myObj.foo();

const button = document.getElementById('mySuperButton');
button.addEventListener('click', function() {
  //   console.log(this); // button
});

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHello() {
//     console.log(`Wuff, my name is ${this.name}`);
//   }
// }

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHello() {
//     console.log(`Meow, my name is ${this.name}`);
//   }
// }

// const dog = new Dog('Bello');

// const cat = new Cat('Kitty');

// dog.sayHello();
// cat.sayHello();

// dog.sayHello.call(cat);

// cat.sayHello.call(dog);
