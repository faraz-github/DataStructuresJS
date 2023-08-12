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

// Tree Traversal
// Visiting every node in the tree
// a) Depth first search (DFS)
// b) Breadth first search (BFS)

// A DFS algorithm starts at the root node and explores as far as possible along each branch before backtracking
// Visit root node, visit all the nodes in the left subtree and visit all all the nodes in the right subtree
// It can be done in three order
// a) Preorder - Read node - Visit left subtree - Visit right subtree
// b) Inorder - Visit left subtree - Read node - Visit right subtree
// c) Postorder - Visit left subtree - Visit right subtree - Read node

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
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  // Tree traversal
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
}

const bst = new BinarySearchTree();
console.log("Tree is empty?", bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 15));
console.log(bst.search(bst.root, 20));

bst.preOrder(bst.root);
console.log("------------------");
bst.inOrder(bst.root);
console.log("------------------");
bst.postOrder(bst.root);
