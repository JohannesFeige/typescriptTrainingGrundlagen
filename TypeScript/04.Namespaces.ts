namespace MyMath {
    const PI = 3.14;

    export function calculateCircumference(diameter: number) {
        return diameter * PI;
    }

    export function calculateRectangle(width: number, height: number) {
        return width * height;
    }
}

console.log(MyMath.calculateRectangle(2, 4));

// Split in Rectangle an Circle

// Import manuell in index.html

// Bundle in ein File (tsc --outFile app.js 04.Rectangle.ts 04.Circle.ts 04.NamespacesModules.ts)

// /// <reference path="04.Rectangle.ts"> <reference path="04.Circle.ts"> -> tsc outFile app.js -> automatisches Bundeln

// Namespace in Namespace (Cicle in MyMath); import Circle = MyMath.Circle;
