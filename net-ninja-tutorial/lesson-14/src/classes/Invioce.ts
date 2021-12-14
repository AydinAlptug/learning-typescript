// exporting the class Invoice to allow to be imported in other files

export class Invoice {

    constructor( 
        readonly client: string, 
        private details: string, 
        public amount: number){

    }

    format(){
        return `${this.client} owes €${this.amount} for ${this.details}`;
    }
}