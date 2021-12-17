import { ILinkedList } from "./ILinkedList.js";
import { LinkedListNode } from "./LinkedListNode.js";


export class LinkedList<T> implements ILinkedList<T>{

    headNode: LinkedListNode<T> | null;
    size: number;

    constructor(){
        this.headNode = null;
        this.size = 0;
    }


    // ----------------------------------------------- Accessing ----------------------------------------------- //

    getNodeAt(atPosition: number): LinkedListNode<T> | null{
        
        if(this.isEmpty() || atPosition < 1 || this.size < atPosition)
            return null;

        let currentNode = this.headNode;
        for(let c = 1; c < atPosition; c++)
            currentNode = (currentNode as LinkedListNode<T>).getNextNode();

        return currentNode;
        
    }

    getEntryAt(atPosition: number): T  | null{
        if(atPosition < 1 || this.size < atPosition)
            return null;

        let node = this.getNodeAt(atPosition);
        return node ? node.getData() : null;
    }

    peekHead(): T | null {
        if(!this.headNode)
            return null;

        return this.headNode.getData();
    }

    peekTail(): T  | null{
        let node = this.getNodeAt(this.size);
        return node ? node.getData() : null;
    }

    // ----------------------------------------------- Adding ----------------------------------------------- //

    addHead(newEntry: T): boolean {
        if(newEntry){
            let newHeadNode: LinkedListNode<T> = new LinkedListNode<T>(newEntry); 

            if(this.headNode){ // if exists, then point it
                this.headNode.setNextNode(newHeadNode);
            }

            this.headNode = newHeadNode;
            this.size++;

            return true;
        }
        return false;
    }

    addTail(newEntry: T): boolean {
        if(newEntry){
            let newNode: LinkedListNode<T> = new LinkedListNode<T>(newEntry);

            if(!this.headNode){
                this.headNode = newNode;
                this.size++;
                return true;
            }

            let lastNode = this.getNodeAt(this.size);

            (lastNode as LinkedListNode<T>).setNextNode(newNode); 
            this.size++;
            return true;
        }
        return false;
    }

    addAt(atPosition: number, newEntry: T): boolean {
        if(atPosition < 1 || this.size < atPosition || !newEntry)
            return false;

        if(atPosition == 1)
            return this.addHead(newEntry);
        
        let newNode: LinkedListNode<T> = new LinkedListNode<T>(newEntry);
        
        let atPositionNode = this.getNodeAt(atPosition);
        let precedingNode = this.getNodeAt(atPosition - 1);

        newNode.setNextNode((atPositionNode as LinkedListNode<T>)); // point the previously existing node
        (precedingNode as LinkedListNode<T>).setNextNode(newNode); // point the new node
        
        return true;
            
    }

    // ----------------------------------------------- Removing ----------------------------------------------- //

    removeHead(): T | null{
        if(this.isEmpty())
            return null;
        
        let headData = (this.headNode as LinkedListNode<T>).getData();
        let secondNode = (this.headNode as LinkedListNode<T>).getNextNode();

        this.headNode =  secondNode ? secondNode : this.headNode;  
        this.size--;

        return headData;
    }
    
    removeTail(): T | null{

        if(this.size == 1)
            return this.removeHead();
        
        let tailNode = this.getNodeAt(this.size) as LinkedListNode<T>;
        let precedingNode = this.getNodeAt(this.size - 1) as LinkedListNode<T>;

        (precedingNode as LinkedListNode<T>).setNextNode(null);
        this.size--;

        return tailNode.getData(); 
    }

    removeAt(atPosition: number): T  | null{
        if(atPosition < 1 || this.size < atPosition)
            return null;
        if(atPosition == 1)
            return this.removeHead();
        if(atPosition == this.size)
            return this.removeTail();

        let atPositionNode = this.getNodeAt(atPosition) as LinkedListNode<T>;
        let precedingNode = this.getNodeAt(atPosition - 1) as LinkedListNode<T>;

        precedingNode.setNextNode(atPositionNode.getNextNode()); // set following node as next of preceding node
        this.size--;

        return atPositionNode.getData(); 
    }

    // ----------------------------------------------- Replacing and Clearing ----------------------------------------------- //

    replace(atPosition: number, newEntry: T): T | null {
        if(atPosition < 1 || this.size < atPosition || !newEntry)
            return null;
        
        let atPositionNode = this.getNodeAt(atPosition) as LinkedListNode<T>;
        const previousData = atPositionNode.getData();
        
        atPositionNode.setData(newEntry);
        return previousData;
    }

    clear(): boolean {
        this.headNode = null;
        this.size = 0;
        return this.isEmpty();
    }

    // ----------------------------------------------- Inspecting ----------------------------------------------- //

    isEmpty(): boolean {
        return this.size == 0 && this.headNode == null;
    }

    getLength(): number {
        return this.size;
    }

    indexOf(entry: T): number{
        if(!this.headNode) 
            return -1;

        let index = 0;
        let currentNode = this.headNode;
        
        while(currentNode != null){
            if(currentNode.getData() === entry) // may need an equals method
                return index;

            currentNode = currentNode.getNextNode() as LinkedListNode<T>;;
            index++;
        }
        return -1;
    }
    
    contains(entry: T): boolean{
        return this.indexOf(entry) != -1;
    }

    // ----------------------------------------------- Other ----------------------------------------------- //

    toArray(): T[]  | null{
        throw new Error("Method not implemented.");
    }
    fromArray(arr: T[]): ILinkedList<T> {
        throw new Error("Method not implemented.");
    }
    getAsReversed(): ILinkedList<T>  | null{
        throw new Error("Method not implemented.");
    }
    
}