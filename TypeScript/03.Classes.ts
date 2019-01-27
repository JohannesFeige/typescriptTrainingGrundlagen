(function() {
    class Person {
        public name: string; // public ist default
        // name: string;
        private type: string;
        protected age: number = 30; // ebenso in erbenden Klassen zugreifbar

        constructor(name: string, public username: string) {
            // erstellt automatisch eine public property "username"
            this.name = name;
        }

        // 2.
        printAge() {
            console.log(this.age);
        }
    }

    const person = new Person('Johannes', 'jofe'); // Konstruktor Initialisierung
    // console.log(person);
    console.log(person.name, person.username);

    // 2.
    person.printAge();

    // Inheritance
    class Johannes extends Person {
        name = 'FooBar'; // 2. Der Konstruktor wird als ersten Aufgerufen -> 'Johannes' wird später überschrieben
        constructor() {
            super('Johannes', 'jofe');
            // console.log(this.type);
            // console.log(this.age);
        }
    }

    const johannes = new Johannes();
    console.log(johannes);

    // Getters & Setters
    class Plant {
        private _species: string = 'Default';

        get species() {
            return this._species;
        }

        set species(value: string) {
            if (value.length > 3) {
                this._species = value;
            }
        }
    }

    let plant = new Plant();
    console.log(plant.species);

    plant.species = 'Tree';
    console.log(plant.species);

    plant.species = 'foo';
    console.log(plant.species);

    // Static
    class Helpers {
        static PI: number = 3.14;
        static logPi(): void {
            console.log(Helpers.PI);
        }
    }

    console.log(Helpers.PI);
    Helpers.logPi();

    // Abstract
    abstract class Project {
        projectName: string = 'Default';
        budget: number;

        abstract changeName(name: string): void;
    }

    class ItProject extends Project {
        changeName(name: string): void {
            this.projectName = name;
        }
    }

    const project = new ItProject();
    console.log(project);
    project.changeName('Super new Project');
    console.log(project);

    // Singleton
    class Singleton {
        static instance: Singleton;
        private constructor(public name: string) {}

        static getInstance(): Singleton {
            if (!Singleton.instance) {
                Singleton.instance = new Singleton(`I'm the only one!`);
            }
            return Singleton.instance;
        }
    }

    let sing = Singleton.getInstance();
    console.log(sing);

    // change public name: string to readonly name: string

    // Polymorphismus
    // Ducktyping

    function logProjetName(project: Project) {
        console.log(project.projectName);
    }

    logProjetName(project);

    const duckProject = {
        budget: 42,
        projectName: 'DuckProject',
        changeName(v) {}
    };

    logProjetName(duckProject);
})();
