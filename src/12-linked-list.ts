export class LinkedList {
    size: number;
    root: Node | null;

    constructor() {
        this.size = 0;
        this.root = null;
    }

    add(value: any) {
        const node = new Node(value);

        if (!this.root) {
            this.root = node;
            this.size += 1;
            return true;
        }

        let lastNode = this.root;
        while (lastNode.next) {
            lastNode = lastNode.next;
        }
        lastNode.next = node;

        this.size += 1;
        return true;
    }

    getSize() {
        return this.size;
    }

    print() {
        const result: any[] = [];
        let current = this.root;

        while (current) {
            result.push(current.value);
            current = current.next;
        }

        return result;
    }
}

class Node {
    value: any;
    next: Node | null;

    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}
