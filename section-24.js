//Welcome to Section 24
//Step back from the tail

function fromLast(list, n) {
    let slow = list.head;
    let fast = list.head;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}
