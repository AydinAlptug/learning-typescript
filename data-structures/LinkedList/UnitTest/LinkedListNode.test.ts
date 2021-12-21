import {LinkedListNode} from '../LinkedListNode';

describe('LinkedListNode', () => {
    
    test('Create a LinkedListNode with specified value', () => {
        let testNode: LinkedListNode<number> = new LinkedListNode<number>(123);
        expect(testNode.getData()).toEqual(123);
        expect(testNode.getNextNode()).toBeNull();
    })

    test('Set the node value to given', () => {
        let testNode: LinkedListNode<number> = new LinkedListNode<number>(123);
        testNode.setData(456);
        expect(testNode.getData()).toEqual(456);
        expect(testNode.getNextNode()).toBeNull();
    })

    test('Set the node to point another node', () => {
        let testNode: LinkedListNode<number> = new LinkedListNode<number>(123);
        let testNodeSecond: LinkedListNode<number> = new LinkedListNode<number>(456);

        testNode.setNextNode(testNodeSecond);

        expect(testNode.getData()).toEqual(123);
        expect(testNode.getNextNode()).toBeDefined();
        expect(testNodeSecond.getData()).toEqual(456);
        expect(testNodeSecond.getNextNode()).toBeNull();
    })
  })