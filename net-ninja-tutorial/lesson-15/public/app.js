"use strict";
// tsc --init
// set rootDir and outDir in tsconfig.json 
var aPerson = {
    name: 'shaun',
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log("I spent " + amount + " bucks");
        return amount;
    },
    // skills = [] // error: property 'skills' does not exist on the 'IsPerson'
};
aPerson.speak('hello');
aPerson.spend(20);
var greetPerson = function (per) {
    console.log("Hello " + per.name + "!");
};
greetPerson(aPerson);
// greetPerson(123123); // error: Argument of type '123123' is not assignable to parameter of type 'IPerson'.
// greetPerson({name: 'someone'}) // error: Argument of type '{ name: string; }' is not assignable to parameter of type 'IPerson'.
