// Tree
// A tree is a hierarchical data structure that consist of nodes connected by edges
// A tree is a non-linear data structure, compared to arrays, linked lists, stacks and queues which are linear data structure.
// In linear data structures, the time required to search is propotional to the size of the data set.
// Trees however, owing to the non linear nature allow quicker and easier access to the data.
// A tree will not contain any loops or cycles.

// Tree Applications
// a) File systems for directory structure
// b) A family tree
// c) An organisation tree
// d) Document object model DOM
// e) Chat bots
// f) Abstract syntax trees

// Terminologies used in Tree Data Structure
// a) Root Node
// b) Parent Nodes
// c) Child Nodes
// d) Sibling Nodes
// e) Leaf Nodes
// f) Ancestor
// g) Path
// h) Degree
// i) Depth
// j) Height

// Binary Search Tree

// a) In Binary Search Tree each node has maximum two child node
// b) each left child will be smaller than parent and each right child will be greater than the parent

// Main operations
// a) Insertion
// b) Search
// c) DFS & BFS To visit all nodes in tree
// d) Deletion

// Application
// a) Searching
// b) Sorting
// c) Implement abstract data types such as look up tables and priority queue

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root == null;
  }
}

const bst = new BinarySearchTree();
console.log("Tree is empty?", bst.isEmpty());
