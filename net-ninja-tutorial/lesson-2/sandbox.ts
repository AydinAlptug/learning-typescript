// compile with: tsc sandbox.ts
// to allow auto compile: tsc --watch sandbox.ts

const character = 'mario';
console.log(character);

const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach((input) => {
    console.log(input)
})

// or 

inputs.forEach( function (input) {
    console.log(input)
})