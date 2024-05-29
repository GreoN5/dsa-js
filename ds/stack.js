class StackArray {
    constructor() {
        this.stack = [];
        this.size = 0;
    }

    push(value) {
        this.stack.push(value);
        this.size++;
    }

    pop() {
        this.size--;
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(value) {
        const newValue = new Node(value);

        if (!this.head) {
            this.head = newValue;
        } else {
            const currentHead = this.head;
            this.head = newValue;
            newValue.next = currentHead;
        }

        this.size++;
        return this;
    }

    pop() {
        if (!this.head) {
            return null;
        }

        const currentHead = this.head;
        this.head = this.head.next;

        return currentHead;
    }

    peek() {
        return this.head;
    }
}
