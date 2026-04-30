// 05-stack-queue.js
// ================================================
// STACK & QUEUE
// ================================================

class Stack {
    constructor() {
        this.data = [];
        this.ukuran = 0;
    }

    push(elemen) {
        this.data.push(elemen);
        this.ukuran++;
    }

    pop() {
        if (this.ukuran === 0) return null;
        this.ukuran--;
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

class Queue {
    constructor() {
        this.data = [];
        this.ukuran = 0
    }

    enqueue(elemen) {
        this.data.push(elemen);
    }

    dequeue() {
        return this.data.shift();
    }

    front() {
        return this.data[0];
    }
}

const stack = new Stack();
stack.push('A');
stack.push('B');
console.log(stack.pop());

const queue = new Queue();
queue.enqueue('X');
queue.enqueue('Y');
console.log(queue.dequeue());

