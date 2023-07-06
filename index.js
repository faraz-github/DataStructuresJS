// 1. Arrays
// ======================================================================================================================================

// a) array holds collection of data
// b) array can store mixed data type values in one
// c) array in javascript is resizable, so size is not required while creating
// d) array is zero indexed in javascript and insertion order is maintained
// e) array in javascript is iterable.

// Declare and initialize an array
const arr = [1, 2, 3, "Apple"];

// Array operations
arr.push(4); // insert at last
arr.unshift(0); // insert at beggining
arr.pop(); // remove from last
arr.shift(); // remove from beggining

// arr.map - The map() method is an iterative method.
// It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.

// arr.filter - The filter() method is an iterative method.
// It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value.
// Array elements which do not pass the callbackFn test are not included in the new array.

// arr.reduce - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// arr.concat - The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// arr.slice - The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
// where start and end represent the index of items in that array. The original array will not be modified.

// arr.splice - The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// Array iteration
for (const item of arr) {
  console.log(item);
  // Output
  // 1
  // 2
  // 3
  // Apple
}

// Big-O in Arrays

// a) Insert or remove from the end - O(1)
// b) Insert or remove from the beggining - O(n)
// c) Access - O(1)
// d) Search - O(n)
// arr.push / arr.pop - O(1)
// arr.shift / arr.unshift / arr.concat / arr.slice / arr.splice - O(n)
// arr.forEach / arr.map / arr.filter / arr.reduce - O(n)

// 2. Objects
// ======================================================================================================================================

// a) object is a collection of key-value pairs
// b) key can be string or symbol and value can be any type
// c) object values can be accessed using dot notation or bracket notation
// d) objects are not iterable

// Declare and initialize an object
const obj = {
  name: "Apple",
  quantity: 5,
  "taste-like": "sweet",
  sayMyName: function () {
    console.log(`Call me ${this.name}`);
  },
};

// Object operations
// obj.name // Access
// obj["taste-like"] // Access
// obj.color = "red"; // Update
// delete obj.color;  // Delete
// Object.keys(obj); // Access Keys Only
// Object.values(obj); // Access Values Only
// Object.entries(obj); // Access Both Keys And Values

// Testing
console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(obj.name);
console.log(obj["quantity"]);
console.log(obj["taste-like"]); // note: mostly bracket notation is used when key contains - or space
obj.sayMyName();

// Big-O in Objects

// a) Insert or remove - O(1)
// b) Access - O(1)
// c) Search - O(n)
// Object.keys(obj) - O(n)
// Object.values(obj) - O(n)
// Object.entries(obj) - O(n)

// 3. Set
// ======================================================================================================================================

// a) set can hold a collection of unique values
// b) set can store diffrent data type values
// c) size of a set is dynamic hence it is not required to declare the size
// d) sets do not maintain an insertion order
// e) set can be iterative and be used with for of loop

// Declare and initialize a set using constructor
const set = new Set([1, 2, 3]);

// set operations
set.add(4);
console.log(set.has(4));
set.delete(3);
set.size;
set.clear();

for (const item of set) {
  console.log(item);
}

// 4. Map
// ======================================================================================================================================

// a) map is an unordered collection of key-value pair, both key and value can have any data type.
// b) for retreiving a value, you can use the corresponding key
// c) maps are iterable, they can be used with a for of loop

// Declare and initialize a map using constructor
const map = new Map([
  ["a", 1],
  ["b", 2],
]); // a and b represents keys, 1 and 2 represents values

// map operations
map.set("c", 3);
console.log(map.has("a"));
map.delete("c");
console.log(map.size);
map.clear();

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
