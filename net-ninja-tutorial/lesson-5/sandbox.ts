// compile with: tsc sandbox.ts
// to allow auto compile: tsc --watch sandbox.ts

/* explicit types */
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = "luigi"; // error - age is number
age = 20;

// isLoggedIn = 25; // error - isLoggedIn is boolean
isLoggedIn = true;


/* arrays */
let ninjas: string[];

// ninjas = [123, 321]; // error - ninjas is string[]

// ninjas.push('shaun'); // error - defined but not initialized

ninjas = ["luigi", "ryu", "yoshi"]; // ok

ninjas.push('shaun'); // ok


/* union types */
let mixed: (string | number) [] = [];
mixed.push('luigi');
mixed.push(25);
// mixed.push(true); // error - boolean is not a string or number
console.log(mixed);

let uid: string | number; 
uid = "123";
uid = 123;
// uid = true; // error - boolean is not a string or number


/* objects */

let ninjaOne: object;

ninjaOne = {name: 'luigi', age: 25};
// ninjaOne = "somestring"; // error 



let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
};

ninjaTwo = {name: 'mario', age: 30, beltColor: 'black'};



