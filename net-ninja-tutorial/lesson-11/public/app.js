"use strict";
// tsc --init
// set rootDir and outDir in tsconfig.json 
// compile with tsc (or tsc --watch)
// it will place the compiled js in outDir
// to prevent the ts files outside "src" to be compiled, add "include" : ["src"] field in tsconfig.json
// // PART 1
// const anchor = document.querySelector('a');
// console.log(anchor);
// // console.log(anchor.href); // error: the object can be null. TS does not know whether there is an anchor tag in the index page
// // one way to overcome this is to check if the object is null
// if(anchor) {
//     console.log(anchor.href);
// }
// const anchor2 = document.querySelector('a')!;
// // if we are certain that there is an anchor tag in the index page, 
// //we can use the "!" operator to force TS to know that the object is not null
// console.log(anchor2.href); 
// ---------------------------------------------------------------------------------------------------------------------
// PART 2
// const form = document.querySelector('form')!;
// better way if there are more than one form in the index page
// when passing a class TS would not know which type of object to be expected. 
// Mark ! would not work. Type casting solves this problem by specifying it "as HTMLFormElement"
var form = document.querySelector('.new-item-form');
console.log(form.children);
// ---------------------------------------------------------------------------------------------------------------------
// PART 3
// accessing input fields
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevents the page from refreshing when the form is submitted
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
