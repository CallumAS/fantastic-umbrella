//Welcome to Section 26
//Tree Width with Level Width

function levelWidth(root) {
    if (!root) {
        return [];
    }

    const widths = [];
    let currentLevel = [root];

    while (currentLevel.length > 0) {
        widths.push(currentLevel.length);

        const nextLevel = [];
        for (let node of currentLevel) {
            nextLevel.push(...node.children);
        }

        currentLevel = nextLevel;
    }

    return widths;
}

// You shouldn't need to modify this class
class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }
}
