// compile with: tsc sandbox.ts
// to allow auto compile: tsc --watch sandbox.ts
/* typescript infers the type of the variable from the initial value */
var character = "mario";
var age = 30;
var isBlackBelt = false;
// character = 20;   // error
character = "luigi"; // ok
// age = "yoshi";   // error
// isBlackBelt = "yes"; // error
var circ = function (diameter) {
    return diameter * Math.PI; // Math is built-in js library 
};
console.log(circ('hello')); // yields NaN
console.log(circ(15));
/* better way to do */
var circ2 = function (diameter) {
    return diameter * Math.PI; // Math is built-in js library 
};
// console.log(circ2('hello')); // error: will not compile
console.log(circ2(15));
