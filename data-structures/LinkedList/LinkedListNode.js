"use strict";
exports.__esModule = true;
exports.LinkedListNode = void 0;
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(data, next) {
        if (next === void 0) { next = null; }
        this.data = data;
        this.next = next;
    }
    LinkedListNode.prototype.getData = function () {
        return this.data;
    };
    LinkedListNode.prototype.setData = function (data) {
        this.data = data;
    };
    LinkedListNode.prototype.getNextNode = function () {
        return this.next;
    };
    LinkedListNode.prototype.setNextNode = function (nextNode) {
        this.next = nextNode;
    };
    LinkedListNode.prototype.toString = function (custom) {
        return custom ? custom(this.data) : "" + this.data;
    };
    return LinkedListNode;
}());
exports.LinkedListNode = LinkedListNode;
