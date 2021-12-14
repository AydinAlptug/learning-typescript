// tsc --init
// set rootDir and outDir in tsconfig.json 
// set module to es2015 from commonjs                           <----------
// set target to es6 from es5                                   <----------
// set type attribute of script tag to module in index.html     <----------
// compile with tsc (or tsc --watch)
// it will place the compiled js in outDir
// to prevent the ts files outside "src" to be compiled, add "include" : ["src"] field in tsconfig.json
// ---------------------------------------------------------------------------------------------------------------------
import { Invoice } from './classes/Invioce.js'; // .js not .ts !!!! <----------
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('luigi', 'work on the luigi website', 300);
console.log(invOne.format());
console.log(invTwo.format());
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// cycle through each invoice object in invoices
invoices.forEach(function (inv) {
    // inv.client = 'mario'; // error: readonly property 'client' is not writable
    console.log(inv.client, inv.amount, inv.format());
});
