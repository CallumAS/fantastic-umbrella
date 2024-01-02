//Welcome to Section 23
//Circular list?

function circular(list) {
    if (!list.head) {
        return false; // Empty list is not circular
    }

    let slow = list.head;
    let fast = list.head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true; // List is circular
        }
    }

    return false; // List is not circular
}