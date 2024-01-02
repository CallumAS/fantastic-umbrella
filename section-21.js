//Welcome to Section 21
//Linked Lists

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(values = []) {
        this.head = null;
        for (let value of values) this.insertLast(value);
    }

    clear() {
        this.head = null;
    }

    size() {
        let counter = 0;
        for (let node of this) counter++;
        return counter;
    }

    getAt(index) {
        for (let [i, node] of this.entries())
            if (i === index) return node;
        return null;
    }

    insertAt(data, index) {
        if (index === 0) this.head = new Node(data, this.head);
        else {
            let prev = this.getAt(index - 1) || this.getLast();
            prev.next = new Node(data, prev.next);
        }
    }

    removeFirst() {
        if (this.head) this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) return;
        if (!this.head.next) this.head = null;
        else {
            let prev = this.head;
            let node = this.head.next;
            while (node.next) [prev, node] = [node, node.next];
            prev.next = null;
        }
    }
    removeAt(index) {
        if (!this.head) {
            return; // Empty list, nothing to remove
        }

        if (index === 0) {
            this.head = this.head.next; // Remove the first node
            return;
        }

        let counter = 0;
        let prev = null;
        let node = this.head;

        while (counter < index && node) {
            prev = node;
            node = node.next;
            counter++;
        }

        if (!node) {
            return; // Index is out of bounds
        }

        prev.next = node.next;
    }

    getFirst() {
        return this.head;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    getLast() {
        if (!this.head) return null;
        let node = this.head;
        while (node.next) node = node.next;
        return node;
    }

    insertLast(data) {
        let last = this.getLast();
        if (last) last.next = new Node(data);
        else this.head = new Node(data);
    }

    forEach(fn) {
        for (let node of this) fn(node);
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }

    * entries() {
        let index = 0;
        for (let node of this) yield [index++, node];
    }
}
