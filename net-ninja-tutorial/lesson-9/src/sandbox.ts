// tsc --init
// set rootDir and outDir in tsconfig.json 
// compile with tsc (or tsc --watch)
// it will place the compiled js in outDir
// to prevent the ts files outside "src" to be compiled, add "include" : ["src"] field in tsconfig.json

const logDetails = (uid: string | number, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: {name: string, uid: number}) => {
    console.log(`${user.name} says hello`);
};

const greetAgain = (user: {name: string, uid: string | number}) => { // see the redundancy
    console.log(`${user.name} says hello again`);
}


/* type aliases */

type StringOrNum = string | number;

const greetAgainAgain = (user: {name: string, uid: StringOrNum}) => {
    console.log(`${user.name} says hello again again`);
}


type objWithName = {name: string, uid: StringOrNum};

const betterGreet = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}