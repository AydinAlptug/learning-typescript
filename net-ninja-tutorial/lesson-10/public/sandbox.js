"use strict";
// tsc --init
// set rootDir and outDir in tsconfig.json 
// compile with tsc (or tsc --watch)
// it will place the compiled js in outDir
// to prevent the ts files outside "src" to be compiled, add "include" : ["src"] field in tsconfig.json
// let greet: Function;
// example 1
var greet;
greet = function (name, greeting) {
    console.log(greeting + " from " + name);
};
// example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else
        return numOne - numTwo;
};
// example 3
var logDetails;
logDetails = function (obj) {
    console.log(obj.name + " is " + obj.age + " years old");
};
