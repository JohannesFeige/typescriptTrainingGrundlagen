import { PI, calculateCircumference } from './05.Modules/05.circle';
import calculateRectangle from './05.Modules/05.rectangle';

console.log(PI);
console.log(calculateCircumference(5));
console.log(calculateRectangle(5, 3));

// tsc --outfile app.js
// change module to amd for compiling in one file

// npm install --save systemjs@0.21.5
// <script src="node_modules/systemjs/dist/system.js"></script>
//     <script>
//         SystemJS.config({
//             baseURL: '/',
//             packages: {
//                 '/': {
//                     defaultExtension: 'js'
//                 }
//             }
//         });
//         SystemJS.import('./05.Modules.js');
//     </script>

// export default
// as Schlüsselwort -> Pi as MyPi und * as Circle
