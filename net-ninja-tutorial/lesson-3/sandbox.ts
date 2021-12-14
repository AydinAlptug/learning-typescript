// compile with: tsc sandbox.ts
// to allow auto compile: tsc --watch sandbox.ts

/* typescript infers the type of the variable from the initial value */
let character = "mario";  
let age = 30;

let isBlackBelt = false;

// character = 20;   // error
character = "luigi"; // ok

// age = "yoshi";   // error
// isBlackBelt = "yes"; // error

const circ = (diameter) => {
    return diameter * Math.PI; // Math is built-in js library 
};

console.log(circ('hello')); // yields NaN
console.log(circ(15));

/* better way to do */

const circ2 = (diameter : number) => {
    return diameter * Math.PI; // Math is built-in js library 
};

// console.log(circ2('hello')); // error: will not compile
console.log(circ2(15));
