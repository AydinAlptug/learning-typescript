// compile with: tsc sandbox.ts
// to allow auto compile: tsc --watch sandbox.ts
var age;
// let age: any = 25; // ok
age = 25;
console.log(age);
age = true;
console.log(age);
age = 'lucas';
console.log(age);
age = { name: 'yoda' };
console.log(age);
var mixed = [];
mixed.push(25);
mixed.push('lucas');
mixed.push(false);
mixed.push({ name: 'yoda' });
console.log(mixed);
// let ninja: any = {};
// ninja = {name: 'luke', age: 25};
var ninja;
ninja = { name: 'luke', age: 25 };
console.log(ninja);
ninja = { name: 987, age: 'ninja' }; // ok, so be careful!
console.log(ninja);
