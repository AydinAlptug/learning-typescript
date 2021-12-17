export interface ILinkedList<T> {

    size: number;

    getEntryAt(atPosition: number): T | null;
    
    peekHead(): T | null;

    peekTail(): T | null;

    addHead(newEntry: T): boolean;

    addTail(newEntry: T): boolean;

    addAt(atPosition: number, newEntry: T): boolean;

    removeHead(): T | null;
    
    removeTail(): T | null;

    removeAt(atPosition: number): T | null;

    replace(atPosition: number, newEntry: T): T | null;

    isEmpty(): boolean;

    getLength(): number;

    clear(): boolean;

    toArray(): T[] | null;

    fromArray(arr: T[]): ILinkedList<T>;

    getAsReversed(): ILinkedList<T> | null;

}