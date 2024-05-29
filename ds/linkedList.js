class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(value) {
        const newValue = new Node(value);

        if (!this.head) {
            this.head = newValue;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }

            current.next = newValue;
        }

        this.size++;
        return this;
    }

    addAtStart(value) {
        const newValue = new Node(value);

        if (!this.head) {
            this.head = newValue;
        } else {
            newValue.next = this.head;
            this.head = newValue;
        }

        this.size++;
        return this;
    }

    remove(value) {
        if (!this.head) {
            return null;
        }

        if (value === this.head.value) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            while (current.next) {
                if (value === current.next.value) {
                    current.next = current.next.next;
                    break;
                }

                current = current.next;
            }
        }

        this.size--;
        return this;
    }

    removeAt(index) {
        if (index < 0 || index > this.size - 1) {
            return null;
        }

        if (index === 0) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }

            current.next = current.next.next;
            current = null;
        }

        this.size--;
        return this;
    }

    find(value) {
        if (!this.head || !value) {
            return null;
        }

        if (value === this.head.value) {
            return this.head;
        }

        let current = this.head;
        while (current.next) {
            if (value === current.next.value) {
                return current.next.value;
            }
        }

        return null;
    }

    print() {
        let current = this.head;
        console.log(`${current.value} `);

        while (current.next) {
            current = current.next;
            console.log(`${current.value} `);
        }
    }
}
