// exporting the class Invoice to allow to be imported in other files

import { IFormatter } from "../interfaces/IFormatter";

export class Invoice implements IFormatter{

    constructor( 
        readonly client: string, 
        private details: string, 
        public amount: number){

    }

    format(){
        return `${this.client} owes €${this.amount} for ${this.details}`;
    }
}