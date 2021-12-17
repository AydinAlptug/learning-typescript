"use strict";
// tsc App.ts -w        ---> enable auto compile in one terminal
// node App.js          ---> for each run in another terminal
exports.__esModule = true;
var LinkedList_js_1 = require("../../LinkedList/LinkedList.js");
var firstList = new LinkedList_js_1.LinkedList();
firstList.addHead(91);
firstList.addTail(81);
firstList.addTail(71);
firstList.addTail(61);
console.log(firstList.peekHead());
console.log(firstList.peekTail());
console.log(firstList.getLength());
