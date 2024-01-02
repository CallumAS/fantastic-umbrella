//Welcome to Section 22
//Find the Midpoint

function midpoint(list) {
    if (!list.head || !list.head.next) {
        return null;
    }

    let slow = list.head;
    let fast = list.head;

    while (fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;

}
