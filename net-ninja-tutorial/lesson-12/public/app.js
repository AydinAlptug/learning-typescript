"use strict";
// tsc --init
// set rootDir and outDir in tsconfig.json 
// compile with tsc (or tsc --watch)
// it will place the compiled js in outDir
// to prevent the ts files outside "src" to be compiled, add "include" : ["src"] field in tsconfig.json
// classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
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
console.log(invoices);
invOne.amount = 500;
//invOne.amount = "hello"; // error: must be a number 
// ---------------------------------------------------------------------------------------------------------------------
var form = document.querySelector('.new-item-form');
// accessing input fields
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevents the page from refreshing when the form is submitted
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
