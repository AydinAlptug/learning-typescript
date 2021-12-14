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

    let doc: IFormatter;

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


const addUID = <T extends object> (obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let someDoc = addUID({name: 'yoshi', age: 40});

console.log(someDoc);
console.log(someDoc.name); 

//let someDocTwo = addUID('hello'); // error: this is not allowed anymore since it is not an object !!!



// with interfaces

interface Resource <T>{
    uid: number;
    resourceName: string;
    data: T;
}

const someDocThree: Resource<object> = {
    uid: 1,
    resourceName: 'person',
    data: {name: 'shaun'}
}

const someDocFour: Resource<string[]> = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['berad', 'milk', 'eggs']
}

console.log(someDocFour.data);



