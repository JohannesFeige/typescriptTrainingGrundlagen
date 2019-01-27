(() => {
    type Person = {
        name: string;
        age: number;
        hasGlasses: boolean;
    };

    type Workmate = Person & {
        team: string;
    };

    type Animal = {
        name: string;
        legs: number;
    };

    const persons: Person[] = [
        { name: 'Johannes', age: 30, hasGlasses: true },
        { name: 'Hans', age: 30, hasGlasses: false },
        { name: 'Franz', age: 27, hasGlasses: true },
    ];

    const workmates: Workmate[] = [
        { name: 'Johannes', age: 30, hasGlasses: true, team: 'ITS' },
        { name: 'Hans', age: 30, hasGlasses: false, team: 'MS' },
        { name: 'Franz', age: 27, hasGlasses: true, team: 'MS' },
    ];

    const animals: Animal[] = [
        { name: 'Dog', legs: 4 },
        { name: 'Cat', legs: 4 },
        { name: 'Spider', legs: 6 },
    ];

    function filterBy<T, U extends keyof T>(array: T[], prop: U, value): T[] {
        return array.filter(x => x[prop] === value);
    }

    console.log(filterBy(persons, 'age', 30));
    console.log(filterBy(persons, 'hasGlasses', true));

    console.log(filterBy(workmates, 'age', 27));

    console.log(filterBy(animals, 'legs', 4));
})();
