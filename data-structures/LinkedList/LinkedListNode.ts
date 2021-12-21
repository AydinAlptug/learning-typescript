export class LinkedListNode<T> {
    
    private data: T;
    private next: LinkedListNode<T> | null;

    constructor(data: T, next: LinkedListNode<T> | null = null) {
        this.data = data;
        this.next = next;
    }

    getData(): T {
        return this.data;
    }
    setData(data: T): void {
        this.data = data;
    }
    getNextNode(): LinkedListNode<T> | null {
        return this.next;
    }
    setNextNode(nextNode: LinkedListNode<T> | null): void{
        this.next = nextNode;
    }

    toString(custom?: Function ): string {
        return custom ? custom(this.data) : `${this.data}`;
    }

}