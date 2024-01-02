//Welcome to Section 18
//Underwater Queue Weaving

function weave(sourceOne, sourceTwo) {
    let queue = new Queue();

    let count = 0;
    while (sourceOne.peek() !== undefined && sourceTwo.peek() !== undefined) {
        if (count % 2 === 0) {
            queue.add(sourceOne.remove());
        } else {
            queue.add(sourceTwo.remove());
        }
        count++;
    }

    return queue;
}

// You should not need to make any changes to this class
class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record);
    }

    remove() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

