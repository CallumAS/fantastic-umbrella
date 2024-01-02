//Welcome to Section 20
//Two Become One

class Queue {
    constructor() {
        this.enQueueStack = new Stack();
        this.deQueueStack = new Stack();
    }

    add(record) {
        while (this.deQueueStack.peek()) {
            this.enQueueStack.push(this.deQueueStack.pop());
        }
        this.enQueueStack.push(record);
    }

    remove() {
        while (this.enQueueStack.peek()) {
            this.deQueueStack.push(this.enQueueStack.pop());
        }
        return this.deQueueStack.pop();
    }

    peek() {
        while (this.enQueueStack.peek()) {
            this.deQueueStack.push(this.enQueueStack.pop());
        }
        return this.deQueueStack.peek();
    }
}