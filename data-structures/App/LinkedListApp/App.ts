// tsc App.ts -w        ---> enable auto compile in one terminal
// node App.js          ---> for each run in another terminal

import { ILinkedList } from "../../LinkedList/ILinkedList.js";
import { LinkedList } from "../../LinkedList/LinkedList.js";

let firstList: ILinkedList<number> = new LinkedList<number>();


firstList.addHead(91);
firstList.addTail(81);
firstList.addTail(71);
firstList.addTail(61);

console.log(firstList.peekHead());
console.log(firstList.peekTail());

console.log(firstList.getLength())

console.log(firstList.toString());
