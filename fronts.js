class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    // accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node
    addFront(val){
        var new_node = new Node(val);
        if(!this.head){
            this.head = new_node ;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    // return the value (not the node) at the head of the list. If the list is empty, return null.
    front() {
        if (!this.head) {
            return null;
        }
        return this.head.data;
    }
    // remove the head node and return the new list head node. If the list is empty, return null.
    removeFront() {
        if (!this.head) {
            console.log("There is nothing to remove.");
            return this;
        }
        this.head = this.head.next;
        return this;
    }
    // print the data as an array
    printAsArray(){
        var runner = this.head;
        var arr = [];
        while (runner){
            arr.push(runner.data);
            runner = runner.next;
        }
        console.log(arr);
        return this;
    }
}




var firstList = new LinkedList();
firstList.addFront(11).addFront(9).addFront(8).addFront(6).addFront(3);
// console.log(firstList.head.data);
// console.log(firstList.head.next.data);
// console.log(firstList.head.next.next.data);
// console.log(firstList.head.next.next.next.data);
// console.log(firstList.head.next.next.next.next.data);


console.log("front = ",firstList.front());
firstList.removeFront()
console.log("front = ",firstList.front());
firstList.printAsArray()
