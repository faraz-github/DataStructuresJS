// 1. Stack
// ======================================================================================================================================

// a) stack is a sequential collection of elements
// b) stack follows the principal of last in first out LIFO
// c) stack is an abstract data type, it is defined by its behaviour rather than the structure.
// d) stack has two main operations push (insertion) and pop (extraction)
// e) some common real world usage for stack are
//      1) browser history tracking
//      2) undo operation when typing
//      3) expression conversion
//      4) call stack in javascript runtime

// Stack operations
// a) push
// b) pop
// c) peek
// d) isEmpty
// e) size
// f) print

// Stack implementation
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

// Create new stack instance
const stack = new Stack();

// Testing
console.log(stack.isEmpty());
stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.size());
stack.print();
console.log(stack.pop());
console.log(stack.peek());

// 1. Queue
// ======================================================================================================================================

// a) queue is a sequential collection of elements
// b) queue follows the principal of first in first out FIFO.
// c) queue has some analogical names like head(extraction point) and tail(insertion point).
// d) queue is an abstract data type, meaning it is determined by it's behaviour rather than the structure.
// e) stack has two main operations Enqueue (insertion-tail) and Dequeue (extraction-head)
// f) some common real world usage for stack are
//      1) printers
//      2) CPU task scheduling
//      3) callback queue in javascript runtime

// Queue operations
// a) Enqueue
// b) Dequeue
// c) peek
// d) isEmpty
// e) size
// f) print

// Queue implementation
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

// Create new queue instance
const queue = new Queue();

// Testing
console.log(queue.isEmpty());
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
console.log(queue.size());
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
