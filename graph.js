// Graph
// graph is a non-linear data structure that consists of a finite number of vertices(nodes) connected by edges.
// trees are specific type of graph data structure
// It can be of two types
// - Directed (Edges have a one direction for traversal)
// - Undirected (Edges are bidirectional to traverse)
// They may contain
// - Only nodes
// - Edges from a node
// - Cycles
// - Self loop
// - Disconnected nodes
// - It may contain waits on the edges (Cost of traversal)
// EXAMPLES
// - Google Maps
// - Social Media Sites

// Code Representation of a graph structure
// Graph is usually represented by adjacency matrix adjacency list

const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

const adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

console.log(adjacencyList["C"]);

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertexOne, vertexTwo) {
    if (!this.adjacencyList[vertexOne]) {
      this.addVertex(vertexOne);
    }
    if (!this.adjacencyList[vertexTwo]) {
      this.addVertex(vertexTwo);
    }

    this.adjacencyList[vertexOne].add(vertexTwo); // add is available on Set
    this.adjacencyList[vertexTwo].add(vertexOne);
  }

  removeEdge(vertexOne, vertexTwo) {
    this.adjacencyList[vertexOne].delete(vertexTwo);
    this.adjacencyList[vertexTwo].delete(vertexOne);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }

    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  hasEdge(vertexOne, vertexTwo) {
    return (
      this.adjacencyList[vertexOne].has(vertexTwo) &&
      this.adjacencyList[vertexTwo].has(vertexOne)
    );
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`);
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.display();

console.log(graph.hasEdge("A", "B"));
console.log(graph.hasEdge("A", "C"));

// graph.removeEdge("A", "B");
graph.removeVertex("B");
graph.display();
