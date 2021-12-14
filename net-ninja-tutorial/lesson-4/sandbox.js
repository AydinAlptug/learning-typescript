// compile with: tsc sandbox.ts
// to allow auto compile: tsc --watch sandbox.ts
/* arrays */
var names = ['luigi', 'mario', 'yoshi'];
// names = "string"; // error: will not allow
names.push('toad');
// names.push(3); // error: will not allow
// names[1] = 3; // error: will not allow
var numbers = [10, 20, 30, 40, 50];
numbers.push(25);
// numbers.push('shaun'); // error: will not allow
// numbers[1] = 'shaun'; // error: will not allow
var mixed = ['ken', 20, 'chun-li', 12, 35];
mixed.push('ryu'); // this is okay
mixed.push(123); // this is okay
mixed[0] = 3; // this is okay
/* objects */
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
// ninja.age = 'twenty'; // error: will not allow
// ninja.skills = ['fighting', 'sneaking']; // error: will not allow to add a new propery
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
};
// ninja = { // error: will not allow to change the object fields once it is declared 
//     name: 'yoshi',
//     belt: 'orange',
//     skills: ['fighting', 'sneaking'],
// };
