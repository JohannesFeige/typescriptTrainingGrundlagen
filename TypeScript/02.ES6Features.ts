(function() {
    // Template Literals
    const desciption = 'Bose Silence Kopfhörer';
    const price = 299;

    console.log('Der Preis für ' + desciption + ' beträgt ' + price + '€.');
    console.log(`Der Preis für
 ${desciption} beträgt ${price}
 €.`);

    // BlockScope:
    var i = 42;

    for (var i = 0; i < 10; i++) {
        console.log(`loop ${i}`);
    }

    console.log(i);

    // Arrow-Functions
    const addNumbers = function(a: number, b: number): number {
        return a + b;
    };

    // const subtractNumber = (a: number, b: number): number => a-b;
    const subtractNumber = (a: number, b: number): number => {
        return a - b;
    };

    const fun = () => {
        // do something
    };

    const otherFunc = ars => {
        // do something
    };

    const yetAnotherFunc = (name: string) => {
        // do something
    };

    // Default Parameter / Optionale Parameter
    const greet = (name: string = 'Johannes') => {
        console.log(name);
    };

    // Spread
    const numbers = [0, 1, 2, 42, 23];
    console.log(Math.max(0, 1, 2, 42, 23));
    console.log(Math.max(...numbers));

    // Rest Operator
    function addAll(...values: number[]): number {
        let result = 0;
        for (let i = 0; i < values.length; i++) {
            result += values[i];
        }

        return result;
    }

    console.log(addAll(42, 23, 21, -5));

    // Destructuring Arrays
    const response = [
        { title: 'first', price: 10 },
        { title: 'second', price: 15 },
        { title: 'third', price: 5 }
    ];
    // console.log(response[0], response[1], response[2]);

    // const firstEntry = response[0];
    // const secondEntry = response[1];
    // const thirdEntry = response[3];
    // console.log(firstEntry, secondEntry, thirdEntry);

    const [firstEntry, secondEntry, thirdEntry] = response;
    console.log(firstEntry, secondEntry, thirdEntry);

    const [hit] = response.filter(x => x.price <= 3);

    console.log(hit);

    // Destructuring Objects
    // const entryName = firstEntry.name;
    // const entryPrice = firstEntry.price;

    // console.log(entryName, entryPrice);

    const { title: entryName, price: entryPrice } = firstEntry;
    console.log(entryName, entryPrice);
})();
