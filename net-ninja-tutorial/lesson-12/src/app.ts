// tsc --init
// set rootDir and outDir in tsconfig.json 
// compile with tsc (or tsc --watch)
// it will place the compiled js in outDir
// to prevent the ts files outside "src" to be compiled, add "include" : ["src"] field in tsconfig.json


// classes

class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `${this.client} owes €${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

console.log(invOne.format());
console.log(invTwo.format());

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

invOne.amount = 500;
//invOne.amount = "hello"; // error: must be a number 




// ---------------------------------------------------------------------------------------------------------------------

const form = document.querySelector('.new-item-form') as HTMLFormElement; 

// accessing input fields
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {

    e.preventDefault(); // prevents the page from refreshing when the form is submitted

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
});