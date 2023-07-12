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

// 2. Queue
// ======================================================================================================================================

// a) queue is a sequential collection of elements
// b) queue follows the principal of first in first out FIFO.
// c) queue has some analogical names like head(extraction point) and tail(insertion point).
// d) queue is an abstract data type, meaning it is determined by it's behaviour rather than the structure.
// e) queue has two main operations Enqueue (insertion-tail) and Dequeue (extraction-head)
// f) some common real world usage for queue are
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

// 2. a) optimisedQueue
// ======================================================================================================================================

// Note: An optimised queue used an object instead of the array which makes its Big-O time complexity constant instead of linear.

class OptimisedQueue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

const optimisedQueue = new OptimisedQueue();

console.log(optimisedQueue.isEmpty());
optimisedQueue.enqueue("Apple");
optimisedQueue.enqueue("Banana");
optimisedQueue.enqueue("Guava");
console.log(optimisedQueue.size());
optimisedQueue.print();
console.log(optimisedQueue.dequeue());
console.log(optimisedQueue.dequeue());
console.log(optimisedQueue.peek());

// 3. CircularQueue
// ======================================================================================================================================

// a) circularQueue is fixed and a single block of memory is used
// as if the first element is connected to the last element
// b) circularQueue is also referred to as circular buffer or ring buffer
// c) circularQueue follows the principal of first in first out FIFO
// d) it will reuse the empty block created during the dequeue operation
// e) when working with queues of fixed maximum size, a circular queue is a great implementation choice
// f) circularQueue supports two main operation Enqueue(insertion-tail) and Dequeue(extraction-head)

// g) some common real world usage for circular queue are
//      1) clock
//      2) streaming data
//      3) traffic lights
