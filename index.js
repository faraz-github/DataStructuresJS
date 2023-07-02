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
