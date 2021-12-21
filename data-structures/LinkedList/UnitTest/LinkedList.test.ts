import {LinkedList} from '../LinkedList';

describe('LinkedList', () => {
    
    // ----------------------------------------------- Adding ----------------------------------------------- //
    test('Create a LinkedList', () => {
        let testList = new LinkedList<string>();
        
        expect(testList).toBeInstanceOf(LinkedList);
        expect(testList.getLength()).toEqual(0);
        expect(testList.toString()).toMatch('');
    })

    test('Add to head', () => {
        let testList = new LinkedList<string>();
        testList.addHead("a");
        
        expect(testList.getLength()).toEqual(1);
        expect(testList.toString()).toMatch("a ");
        expect(testList.peekHead()).toEqual("a");
    })

    test('Add to tail', () => {
        let testList = new LinkedList<string>();
        testList.addTail("a");
        
        expect(testList.getLength()).toEqual(1);
        expect(testList.toString()).toMatch("a ");
        expect(testList.peekTail()).toEqual("a");
    })

    test('Add at given position', () => {
        let testList = new LinkedList<string>();
        testList.addTail("a");
        testList.addTail("b");
        testList.addTail("c");
        testList.addAt(2, "d");
        
        expect(testList.getLength()).toEqual(3);
        expect(testList.getNodeAt(2).getData()).toEqual("d");
    })

    // ----------------------------------------------- Accessing ----------------------------------------------- //
    
    test('Get node at position', () => {
        let testList = new LinkedList<string>();
        testList.addTail("a");
        testList.addTail("b");
        testList.addTail("c");
        testList.addTail("d");
        
        expect(testList.getNodeAt(3).getData()).toEqual("c");
    })

    test('Get entry at position', () => {
        let testList = new LinkedList<string>();
        testList.addTail("a");
        testList.addTail("b");
        testList.addTail("c");
        testList.addTail("d");
        
        expect(testList.getEntryAt(3)).toEqual("c");
    })

    test('Peak head', () => {
        let testList = new LinkedList<string>();
        testList.addHead("a");
        testList.addTail("b");
        
        expect(testList.peekHead()).toEqual("a");
    })

    test('Peak tail', () => {
        let testList = new LinkedList<string>();
        testList.addHead("a");
        testList.addTail("b");
        
        expect(testList.peekTail()).toEqual("b");
    })

    // ----------------------------------------------- Removing ----------------------------------------------- //

    test('Remove head', () => {
        let testList = new LinkedList<string>();
        testList.addHead("a");
        testList.addTail("b");
        testList.addTail("c");
        testList.addTail("d");

        testList.removeHead();
        expect(testList.getLength()).toEqual(3);
        expect(testList.toString()).toMatch("b c d ");
    })

    test('Remove tail', () => {
        let testList = new LinkedList<string>();
        testList.addHead("a");
        testList.addTail("b");
        testList.addTail("c");
        testList.addTail("d");

        testList.removeTail();
        expect(testList.getLength()).toEqual(3);
        expect(testList.toString()).toMatch("a b c ");
    })

    test('Remove at position', () => {
        let testList = new LinkedList<string>();
        testList.addHead("a");
        testList.addTail("b");
        testList.addTail("c");
        testList.addTail("d");

        testList.removeAt(2);
        expect(testList.getLength()).toEqual(3);
        expect(testList.toString()).toMatch("a c d ");

    })

    // ----------------------------------------------- Replacing and Clearing ----------------------------------------------- //

    test('Replace at position', () => {
        let testList = new LinkedList<string>();
        testList.addHead("a");
        testList.addTail("b");
        testList.addTail("c");
        testList.addTail("d");

        testList.replace(2, "e");
        expect(testList.getLength()).toEqual(4);
        expect(testList.toString()).toMatch("a e c d ");
    })

    test('Clear', () => {
        let testList = new LinkedList<string>();
        testList.addHead("a");
        testList.addTail("b");
        testList.addTail("c");
        testList.addTail("d");

        expect(testList.getLength()).toEqual(4);

        testList.clear();

        expect(testList.getLength()).toEqual(0);
        expect(testList.toString()).toMatch("");
    })

    // ----------------------------------------------- Inspecting ----------------------------------------------- //


    test('Is empty', () => {
        let testList = new LinkedList<string>();
        
        expect(testList.isEmpty()).toBeTruthy();
        expect(testList.isEmpty()).toEqual(true);
        expect(testList.getLength()).toEqual(0);
    })

    test('Get length', () => {
        let testList = new LinkedList<string>();
        testList.addHead("a");
        testList.addTail("b");
        testList.addTail("c");
        testList.addTail("d");

        expect(testList.getLength()).toEqual(4);
    })

    test('Index of', () => {
        let testList = new LinkedList<string>();
        testList.addHead("a");
        testList.addTail("b");
        testList.addTail("c");
        testList.addTail("d");

        expect(testList.indexOf("c")).toEqual(2);
    })

    test('Contains', () => {
        let testList = new LinkedList<string>();
        testList.addHead("a");
        testList.addTail("b");
        testList.addTail("c");
        testList.addTail("d");

        expect(testList.contains("c")).toBeTruthy();
        expect(testList.contains("c")).toEqual(true);
        expect(testList.contains("e")).toBeFalsy();
        expect(testList.contains("e")).toEqual(false);
    })

    // ----------------------------------------------- Other ----------------------------------------------- //

    test('To array', () => {
        let testList = new LinkedList<string>();
        testList.addHead("a");
        testList.addTail("b");
        testList.addTail("c");
        testList.addTail("d");

        expect(testList.toArray()).toEqual(["a", "b", "c", "d"]);
    })

    test('From array', () => {
        let testList = new LinkedList<string>();
        testList.fromArray(["a", "b", "c", "d"]);

        expect(testList.toArray()).toEqual(["a", "b", "c", "d"]);
    })

    // test('Get as reversed', () => { // not implemented yet
    //     let testList = new LinkedList<string>();
    //     testList.addHead("a");
    //     testList.addTail("b");
    //     testList.addTail("c");
    //     testList.addTail("d");

    //     expect(testList.getAsReversed().toArray()).toEqual(["d", "c", "b", "a"]);
    // })

  })