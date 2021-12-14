/*
    1. register a list container (ul) in the costructor
    2. create a render method to render a new 'li' to the container
        -- accepts arguments: invoice or payment, a heading, a position
        -- create the html temlate (li, h4, p)
        -- add the 'li' template to the start/end of the list
*/

import { IFormatter } from "../interfaces/IFormatter";

export class ListTemplate {
    constructor(private container: HTMLUListElement){

    }
    render(item: IFormatter, heading: string, pos: 'start' | 'end'){
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');

        h4.textContent = heading;
        li.append(h4);

        p.textContent = item.format();
        li.append(p);
        
        if (pos === 'start') {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }
    }
}




