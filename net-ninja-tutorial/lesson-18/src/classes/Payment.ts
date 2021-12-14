// exporting the class Invoice to allow to be imported in other files

import { IFormatter } from "../interfaces/IFormatter";

export class Payment implements IFormatter{

    constructor( 
        readonly recipient: string, 
        private details: string, 
        public amount: number){

    }

    format(){
        return `${this.recipient} is owed €${this.amount} for ${this.details}`;
    }
}