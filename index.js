// 1. Arrays
// ======================================================================================================================================

// a) array holds collection of data
// b) array can store mixed data type values in one
// c) array in javascript is resizable, so size is not required while creating
// d) array is zero indexed in javascript and insertion order is maintained
// e) array in javascript is iterable.

const arr = [1, 2, 3, "Apple"];

console.log(arr[0]); // 1

arr.push(4); // insert at last
arr.unshift(0); // insert at beggining
arr.pop(); // remove from last
arr.shift(); // remove from beggining

for (const item of arr) {
  console.log(item);
  // Output
  // 1
  // 2
  // 3
  // Apple
}
