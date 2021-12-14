// compile with: tsc sandbox.ts
// to allow auto compile: tsc --watch sandbox.ts
/* explicit types */
var character;
var age;
var isLoggedIn;
// age = "luigi"; // error - age is number
age = 20;
// isLoggedIn = 25; // error - isLoggedIn is boolean
isLoggedIn = true;
/* arrays */
var ninjas;
// ninjas = [123, 321]; // error - ninjas is string[]
// ninjas.push('shaun'); // error - defined but not initialized
ninjas = ["luigi", "ryu", "yoshi"]; // ok
ninjas.push('shaun'); // ok
/* union types */
var mixed = [];
mixed.push('luigi');
mixed.push(25);
// mixed.push(true); // error - boolean is not a string or number
console.log(mixed);
var uid;
uid = "123";
uid = 123;
// uid = true; // error - boolean is not a string or number
/* objects */
var ninjaOne;
ninjaOne = { name: 'luigi', age: 25 };
// ninjaOne = "somestring"; // error 
var ninjaTwo;
ninjaTwo = { name: 'mario', age: 30, beltColor: 'black' };
