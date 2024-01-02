//Welcome to Section 17
//The Queue

class Queue {
    constructor() {
        this.data = [];
    }

    add(item) {
        this.data.push(item);
    }

    remove() {
        return this.data.shift();
    }
}
