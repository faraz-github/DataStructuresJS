// Hash Table
// A hash table, also known as hash map, is a data structure that is used to store key-value pairs.
// It is generally used for fast lookup to the value compared to other similar structures.

// A hashing function accepts the string key, converts it into a hash code using a defined logic and then
// and then maps it into numeric index that is within the bounds of an array.

// Using the index, store the value
// The same hashing function is reused to retrieve the value given a key.

// Main operations of Hash Table
// a) Set
// b) Get
// c) Remove

// Main Applications
// a) Database indexing
// b) Caches

// Side note: map is better than objects

// Handling Hashing Collisions
class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let index = 0; index < key.length; index++) {
      total += key.charCodeAt(index);
    }
    return total % this.size; // to keep in array bounds
  }

  set(key, value) {
    const index = this.hash(key);
    // this.table[index] = value;
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    // return this.table[index];
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    // this.table[index] = undefined;
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let index = 0; index < this.table.length; index++) {
      if (this.table[index]) {
        console.log(index, this.table[index]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "Bruce");
table.set("age", 25);
table.display();

table.set("mane", "Clark");
table.display();

console.log(table.get("name"));

table.set("name", "Diana");
table.display();

table.remove("name");
table.display();
