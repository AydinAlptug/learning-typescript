// tsc --init
// set rootDir and outDir in tsconfig.json 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// set module to es2015 from commonjs                           <----------
// set target to es6 from es5                                   <----------
// set type attribute of script tag to module in index.html     <----------
// compile with tsc (or tsc --watch)
// it will place the compiled js in outDir
// to prevent the ts files outside "src" to be compiled, add "include" : ["src"] field in tsconfig.json
// ---------------------------------------------------------------------------------------------------------------------
import { Invoice } from "./classes/Invioce.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
var docOne;
var docTwo;
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing', 200);
var docs = [];
docs.push(docOne);
docs.push(docTwo);
var form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
var ul = document.querySelector('ul');
var list = new ListTemplate(ul); // we know that this will definitely be on the page <----------
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // without specifying the types, the line "doc = new Invoice(...values);" will give an error
    var values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    var doc;
    if (type.value === 'invoice') {
        doc = new (Invoice.bind.apply(Invoice, __spreadArray([void 0], values, false)))();
    }
    else {
        doc = new (Payment.bind.apply(Payment, __spreadArray([void 0], values, false)))();
    }
    list.render(doc, type.value, 'end');
});
// GENERICS
// const addUID = (obj: object) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }
// let someDoc = addUID({name: 'yoshi', age: 40});
// console.log(someDoc);
// // console.log(someDoc.name); // error: it does not know what properties are on the object we passed in
// // possible to overcome with generics:
// const addUID = <T> (obj: T) => {  // <T> means a generic type <----------
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }
// let someDoc = addUID({name: 'yoshi', age: 40});
// console.log(someDoc);
// console.log(someDoc.name); 
// let someDocTwo = addUID('hello'); // this is allowed !!!
// to overcome this issue we can use inheritance with type T
// // possible to overcome with generics:
// const addUID = <T extends object> (obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }
// let someDoc = addUID({name: 'yoshi', age: 40});
// console.log(someDoc);
// console.log(someDoc.name); 
// //let someDocTwo = addUID('hello'); // error: this is not allowed anymore since it is not an object !!!
// with interfaces
// // ENUMS
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
// interface Resource <T> {
//     uid: number;
//     resourceType: ResourceType;
//     data: T;
// }
// const someDocWithTitle: Resource<object> = {
//     uid: 1,
//     resourceType: ResourceType.BOOK,
//     data: {title: 'name of the wind'}
// }
// const someDocWithName: Resource<object> = {
//     uid: 10,
//     resourceType: ResourceType.PERSON,
//     data: {name: 'yoshi'}
// }
// console.log(someDocWithTitle);
// console.log(someDocWithName);
// TUPLES
var arr = ['ryu', 25, true];
arr[0] = false; // allowed
arr[1] = 'yoshi'; // allowed
arr = [30, false, 'yoshi']; // allowed
// in tuples the order matters. types are fixed, only values can be changed
var tup = ['ryu', 25, true];
// tup[0] = false; // not allowed
// tup[1] = 'yoshi'; // not allowed
// tup = [30, false, 'yoshi']; // not allowed
tup[0] = 'yoshi'; // allowed
var student;
student = ['yoshi', 25];
// student = [25, 'yoshi']; // not allowed
