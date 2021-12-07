// tsc --init
// set rootDir and outDir in tsconfig.json 
// compile with tsc (or tsc --watch)
// it will place the compiled js in outDir
// to prevent the ts files outside "src" to be compiled, add "include" : ["src"] field in tsconfig.json



let greet = () =>{
    console.log('Hello World!');
}

// greet = 'hello'; // error: greet is a function, not a string

let greetIt: Function;

greetIt = () => {
    console.log('Salut!');
}

const add = (a: number, b: number, c?: number | string) => {
    console.log(a + b);
    console.log(c); // undefined if c is not provided
};

// add(1, '2'); // error: string is not assignable to number
add(1, 2);

add(1, 2, '3');

const divide = (a: number, b: number, c: number | string = 10) => {
    console.log(a / b);
    console.log(c); // 10 if c is not provided
};

divide(1, 2);

divide(1, 2, '3');

const minus = (a: number, b: number) : number  => { // don't have to specify return type, it will be inferred by typescript
    return a - b;
};

let result = minus(3, 2); // typescript infers the return type as number
// result = 'some string'; // error: string is not assignable to number

const log_multiply = (a: number, b: number) : void => { // void means no return value
    console.log(a * b);
}

