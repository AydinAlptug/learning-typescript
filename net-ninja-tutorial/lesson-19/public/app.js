// tsc --init
// set rootDir and outDir in tsconfig.json 
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
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
var someDocWithTitle = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
};
var someDocWithName = {
    uid: 10,
    resourceType: ResourceType.PERSON,
    data: { name: 'yoshi' }
};
console.log(someDocWithTitle);
console.log(someDocWithName);
