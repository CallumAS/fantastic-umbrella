//Welcome to Section 25
//Build a tree

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();

            arr.push(...node.children);
            fn(node);
        }
    }
    traverseDF(fn) {
        const stack = [this.root];
        while (stack.length) {
            const node = stack.pop();
            stack.push(...node.children.reverse());
            fn(node);
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter((node) => {
            return node.data !== data;
        });
    }
}