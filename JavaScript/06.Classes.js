class Dog {    
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    sayHello() {
        console.log(`Wuff, my name is ${this.name}!`);
    }
}

const bello = new Dog('Bello', 15);

bello.sayHello();

// class Animal {
//     constructor(weight) {
//         this.weight = weight;
//     }

//     eat(foodWeight) {
//         this.weight += foodWeight;
//         return this.weight;
//     }
// }

// class ExtendedDog extends Animal {
//     constructor(name, weight) {
//         super(weight);
//         this.name = name;
//     }

//     sayHello() {
//         console.log(`Wuff, my name is ${this.name}!`);
//     }
// }

// const extendedBello = new ExtendedDog('ExtendedBello', 12);
// console.log(extendedBello.eat(0.5));
// extendedBello.sayHello();