"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
var LinkedListNode_js_1 = require("./LinkedListNode.js");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.headNode = null;
        this.size = 0;
    }
    // ----------------------------------------------- Accessing ----------------------------------------------- //
    LinkedList.prototype.getNodeAt = function (atPosition) {
        if (this.isEmpty() || atPosition < 1 || this.size < atPosition)
            return null;
        var currentNode = this.headNode;
        for (var c = 1; c < atPosition; c++)
            currentNode = currentNode.getNextNode();
        return currentNode;
    };
    LinkedList.prototype.getEntryAt = function (atPosition) {
        if (atPosition < 1 || this.size < atPosition)
            return null;
        var node = this.getNodeAt(atPosition);
        return node ? node.getData() : null;
    };
    LinkedList.prototype.peekHead = function () {
        if (!this.headNode)
            return null;
        return this.headNode.getData();
    };
    LinkedList.prototype.peekTail = function () {
        var node = this.getNodeAt(this.size);
        return node ? node.getData() : null;
    };
    // ----------------------------------------------- Adding ----------------------------------------------- //
    LinkedList.prototype.addHead = function (newEntry) {
        if (newEntry) {
            var newHeadNode = new LinkedListNode_js_1.LinkedListNode(newEntry);
            if (this.headNode) { // if exists, then point it
                this.headNode.setNextNode(newHeadNode);
            }
            this.headNode = newHeadNode;
            this.size++;
            return true;
        }
        return false;
    };
    LinkedList.prototype.addTail = function (newEntry) {
        if (newEntry) {
            var newNode = new LinkedListNode_js_1.LinkedListNode(newEntry);
            if (!this.headNode) {
                this.headNode = newNode;
                this.size++;
                return true;
            }
            var lastNode = this.getNodeAt(this.size);
            lastNode.setNextNode(newNode);
            this.size++;
            return true;
        }
        return false;
    };
    LinkedList.prototype.addAt = function (atPosition, newEntry) {
        if (atPosition < 1 || this.size < atPosition || !newEntry)
            return false;
        if (atPosition == 1)
            return this.addHead(newEntry);
        var newNode = new LinkedListNode_js_1.LinkedListNode(newEntry);
        var atPositionNode = this.getNodeAt(atPosition);
        var precedingNode = this.getNodeAt(atPosition - 1);
        newNode.setNextNode(atPositionNode); // point the previously existing node
        precedingNode.setNextNode(newNode); // point the new node
        return true;
    };
    // ----------------------------------------------- Removing ----------------------------------------------- //
    LinkedList.prototype.removeHead = function () {
        if (this.isEmpty())
            return null;
        var headData = this.headNode.getData();
        var secondNode = this.headNode.getNextNode();
        this.headNode = secondNode ? secondNode : this.headNode;
        this.size--;
        return headData;
    };
    LinkedList.prototype.removeTail = function () {
        if (this.size == 1)
            return this.removeHead();
        var tailNode = this.getNodeAt(this.size);
        var precedingNode = this.getNodeAt(this.size - 1);
        precedingNode.setNextNode(null);
        this.size--;
        return tailNode.getData();
    };
    LinkedList.prototype.removeAt = function (atPosition) {
        if (atPosition < 1 || this.size < atPosition)
            return null;
        if (atPosition == 1)
            return this.removeHead();
        if (atPosition == this.size)
            return this.removeTail();
        var atPositionNode = this.getNodeAt(atPosition);
        var precedingNode = this.getNodeAt(atPosition - 1);
        precedingNode.setNextNode(atPositionNode.getNextNode()); // set following node as next of preceding node
        this.size--;
        return atPositionNode.getData();
    };
    // ----------------------------------------------- Replacing and Clearing ----------------------------------------------- //
    LinkedList.prototype.replace = function (atPosition, newEntry) {
        if (atPosition < 1 || this.size < atPosition || !newEntry)
            return null;
        var atPositionNode = this.getNodeAt(atPosition);
        var previousData = atPositionNode.getData();
        atPositionNode.setData(newEntry);
        return previousData;
    };
    LinkedList.prototype.clear = function () {
        this.headNode = null;
        this.size = 0;
        return this.isEmpty();
    };
    // ----------------------------------------------- Inspecting ----------------------------------------------- //
    LinkedList.prototype.isEmpty = function () {
        return this.size == 0 && this.headNode == null;
    };
    LinkedList.prototype.getLength = function () {
        return this.size;
    };
    LinkedList.prototype.indexOf = function (entry) {
        if (!this.headNode)
            return -1;
        var index = 0;
        var currentNode = this.headNode;
        while (currentNode != null) {
            if (currentNode.getData() === entry) // may need an equals method
                return index;
            currentNode = currentNode.getNextNode();
            ;
            index++;
        }
        return -1;
    };
    LinkedList.prototype.contains = function (entry) {
        return this.indexOf(entry) != -1;
    };
    // ----------------------------------------------- Other ----------------------------------------------- //
    LinkedList.prototype.toArray = function () {
        throw new Error("Method not implemented.");
    };
    LinkedList.prototype.fromArray = function (arr) {
        throw new Error("Method not implemented.");
    };
    LinkedList.prototype.getAsReversed = function () {
        throw new Error("Method not implemented.");
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
