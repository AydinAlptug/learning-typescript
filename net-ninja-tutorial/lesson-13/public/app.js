"use strict";
// tsc --init
// set rootDir and outDir in tsconfig.json 
// compile with tsc (or tsc --watch)
// it will place the compiled js in outDir
// to prevent the ts files outside "src" to be compiled, add "include" : ["src"] field in tsconfig.json
// classes
// // PART 1
// // all fields are public by default !!! ==> client: string; // same as --> public client: string;
// // readonly: we can read the value but can't change it, even inside the class !!!
// class Invoice {
//     readonly client: string; // same as --> public client: string;
//     private details: string;
//     public amount: number;
//     constructor(c: string, d: string, a: number){
//         this.client = c;
//         this.details = d;
//         this.amount = a;
//     }
//     format(){
//         // this.client = this.client.toUpperCase(); // error: readonly property 
//         return `${this.client} owes €${this.amount} for ${this.details}`;
//     }
// }
// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// console.log(invOne.format());
// console.log(invTwo.format());
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// // cycle through each invoice object in invoices
// invoices.forEach(inv => {
//     // inv.client = 'mario'; // error: readonly property 'client' is not writable
//     console.log(inv.client, inv.amount, inv.format());
// });
// ---------------------------------------------------------------------------------------------------------------------
// PART 2
// this will ONLY work if we define access modifiers for the fields in the constructor parameters !!!
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        // this.client = this.client.toUpperCase(); // error: readonly property 
        return this.client + " owes \u20AC" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
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
