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

// Circular Queue operations
// a) Enqueue
// b) Dequeue - remove the oldest element from the queue
// c) isFull
// d) isEmpty
// e) peek
// g) print

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.currentLength = 0;
    this.capacity = capacity;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  size() {
    return this.currentLength;
  }

  enqueue(item) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = item;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const circularQueue = new CircularQueue(5);
console.log(circularQueue.isEmpty());
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);
console.log(circularQueue.size());
circularQueue.print();
console.log(circularQueue.isFull());
console.log(circularQueue.dequeue());
console.log(circularQueue.peek());
circularQueue.print();
circularQueue.enqueue(60);
circularQueue.print();

// 3. LinkedList
// ======================================================================================================================================

// a) linked list is a linear data structure that includes a series of connected nodes
// b) each node consists data value and pointer to the next node
// c) the main benefit is insertion or extraction can be done without reallocation or
// reorganisation of the entire structure
// d) drawbacks is randomly accessing element is not feasible, and has linear time complexity while accessing
// e) it supports three main operation, insertion(start, end or any index), deletion(index) and search(value)

// f) some common real world usage for linkedlist
//      1) all usage of both stacks and queues are possible via linked list too
//      2) image viewer(like slide show)
//      3) traffic lights

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

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }

    this.size--;
    return removedNode.value;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";

      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }

      console.log(listValues);
    }
  }
}

const linkedList = new LinkedList();

console.log("List is empty?", linkedList.isEmpty());
console.log("List size", linkedList.getSize());

linkedList.print();

linkedList.append(10);
linkedList.print();
linkedList.append(20);
linkedList.append(30);

linkedList.print();

linkedList.insert(10, 0);
linkedList.print();
linkedList.insert(20, 0);
linkedList.print();
linkedList.insert(30, 0);
linkedList.print();
console.log(linkedList.getSize());

console.log(linkedList.removeFrom(10));

console.log(linkedList.removeFrom(0));
linkedList.print();
console.log(linkedList.removeFrom(1));
linkedList.print();
console.log(linkedList.getSize());
