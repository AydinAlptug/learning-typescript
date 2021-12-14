// tsc --init
// set rootDir and outDir in tsconfig.json 

// set module to es2015 from commonjs                           <----------
// set target to es6 from es5                                   <----------
// set type attribute of script tag to module in index.html     <----------

// compile with tsc (or tsc --watch)
// it will place the compiled js in outDir
// to prevent the ts files outside "src" to be compiled, add "include" : ["src"] field in tsconfig.json
// ---------------------------------------------------------------------------------------------------------------------

// interfaces

interface IPerson{
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}


const aPerson: IPerson = {
    name: 'shaun',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log(`I spent ${amount} bucks`);
        return amount;
    },
    // skills = [] // error: property 'skills' does not exist on the 'IsPerson'
};

aPerson.speak('hello');
aPerson.spend(20);

const greetPerson = (per: IPerson) =>  {
    console.log(`Hello ${per.name}!`);
}

greetPerson(aPerson);
// greetPerson(123123); // error: Argument of type '123123' is not assignable to parameter of type 'IPerson'.
// greetPerson({name: 'someone'}) // error: Argument of type '{ name: string; }' is not assignable to parameter of type 'IPerson'.


