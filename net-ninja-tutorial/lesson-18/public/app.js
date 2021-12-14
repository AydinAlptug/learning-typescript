// tsc --init
// set rootDir and outDir in tsconfig.json 
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
    var doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
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
// possible to overcome with generics:
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var someDoc = addUID({ name: 'yoshi', age: 40 });
console.log(someDoc);
console.log(someDoc.name);
var someDocThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' }
};
var someDocFour = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['berad', 'milk', 'eggs']
};
console.log(someDocFour.data);
