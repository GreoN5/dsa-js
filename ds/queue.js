class QueueArray {
    constructor() {
        this.queue = [];
        this.size = 0;
    }

    enqueue(value) {
        this.queue.push(value);
        this.size++;
    }

    dequeue() {
        this.size--;
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(value) {
        const newValue = new Node(value);

        if (!this.head) {
            this.head = newValue;
            this.tail = newValue;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }

            current.next = newValue;
            this.tail = newValue;
        }

        this.size++;
        return this;
    }

    dequeue() {
        if (!this.head) {
            return null;
        }

        const removedEl = this.head;
        this.head = this.head.next;

        this.size--;
        return removedEl.value;
    }

    peek() {
        return this.head;
    }

    last() {
        return this.tail;
    }
}
