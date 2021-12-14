"use strict";
// tsc --init
// set rootDir and outDir in tsconfig.json 
// compile with tsc (or tsc --watch)
// it will place the compiled js in outDir
// to prevent the ts files outside "src" to be compiled, add "include" : ["src"] field in tsconfig.json
var greet = function () {
    console.log('Hello World!');
};
// greet = 'hello'; // error: greet is a function, not a string
var greetIt;
greetIt = function () {
    console.log('Salut!');
};
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c); // undefined if c is not provided
};
// add(1, '2'); // error: string is not assignable to number
add(1, 2);
add(1, 2, '3');
var divide = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a / b);
    console.log(c); // 10 if c is not provided
};
divide(1, 2);
divide(1, 2, '3');
var minus = function (a, b) {
    return a - b;
};
var result = minus(3, 2); // typescript infers the return type as number
// result = 'some string'; // error: string is not assignable to number
var log_multiply = function (a, b) {
    console.log(a * b);
};
