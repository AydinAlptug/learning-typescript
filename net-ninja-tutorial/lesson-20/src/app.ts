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
import { IFormatter } from "./interfaces/IFormatter.js";


let docOne: IFormatter;
let docTwo: IFormatter;

docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing', 200);

let docs: IFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);




const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul') as HTMLUListElement;
const list = new ListTemplate(ul)!; // we know that this will definitely be on the page <----------



form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    // without specifying the types, the line "doc = new Invoice(...values);" will give an error
    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber]; 

    let doc: IFormatter;

    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    } 
    else {
        doc = new Payment(...values);
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

let arr = ['ryu', 25, true];

arr[0] = false; // allowed
arr[1] = 'yoshi'; // allowed
arr = [30, false, 'yoshi']; // allowed

// in tuples the order matters. types are fixed, only values can be changed

let tup: [string, number, boolean] = ['ryu', 25, true];

// tup[0] = false; // not allowed
// tup[1] = 'yoshi'; // not allowed
// tup = [30, false, 'yoshi']; // not allowed

tup[0] = 'yoshi'; // allowed

let student: [string, number];
student = ['yoshi', 25];
// student = [25, 'yoshi']; // not allowed

