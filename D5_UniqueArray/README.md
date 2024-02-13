# *Instruction & Requirements*

Implement a function `uniqueArray` that takes in an array and returns a duplicate-free version of the array where only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.

**Example**
```javascript
uniqueArray([1, 2, 3]); // [1, 2, 3]
uniqueArray([1, 1, 2]); // [1, 2]
uniqueArray([2, 1, 2]); // [2, 1]
```

# *My Problem-solving Ideas*

- My primary strategy involves leveraging the `Set` data structure to eliminate duplicates from an array due to its inherent property of storing unique elements.

- After creating a `Set` from the array to ensure all elements are unique, I then convert this `Set` back into an array. This conversion can be done using two different methods: `Array.from()`([Check here](./MySolution/index_1.js)) and the spread operator (`...`) ([Check here](./MySolution/index_2.js)).

**Spread Operator(`...`)**

- **Advantages:**
     - **Simplicity:** The syntax is straightforward and clean, making my code easy to read and understand.
     - **Versatility:** The spread operator can be used in various contexts, not just for converting sets to arrays but also for combining arrays, spreading objects, and more.

- **Disadvantages:**
     - **Performance:** For very large datasets, the spread operator might perform slightly slower than `Array.from()` because it involves an implicit iteration over the set elements to spread them into an array.

**`Array.from()`**

- **Advantages:**
     - **Performance:** `Array.from()` is specifically designed for converting iterable or array-like objects into arrays and might offer better performance on large datasets.
     - **Functionality:** It accepts a map function as a second argument, allowing for the transformation of elements during the conversion process. This adds a layer of flexibility for operations on the elements.

- **Disadvatages:**

- **Readability:** Compared to using the spread operator, `Array.from()` might be slightly less intuitive for beginners or those not familiar with its capabilities, especially when using the map function feature.

---
## 👁 *Knowledge point supplement*

### 1. Examples of `Array.from()` Supporting Conversion Types
```javascript
// From a String to an Array
const str = 'hello';
const strArray = Array.from(str);
console.log(strArray); // ['h', 'e', 'l', 'l', 'o']

// From a Set to an Array
const mySet = new Set([1, 2, 3, 4]);
const setArray = Array.from(mySet);
console.log(setArray); // [1, 2, 3, 4]

// From a Map to an Array of [key, value] pairs
const myMap = new Map([['a', 1], ['b', 2]]);
const mapArray = Array.from(myMap);
console.log(mapArray); // [['a', 1], ['b', 2]]

// From a NodeList to an Array
// Assuming document.querySelectorAll('div') returns a NodeList of div elements
const nodeList = document.querySelectorAll('div');
const nodeArray = Array.from(nodeList);
console.log(nodeArray); // An array of div elements

```

### 2. `Array.from()` with a Map Function
```javascript
// Converting and multiplying each element by 2
const mySet = new Set([1, 2, 3]);
const doubled = Array.from(mySet, number => number * 2);
console.log(doubled); // [2, 4, 6]

// Converting a string into an array of char codes
const str = 'abc';
const charCodes = Array.from(str, char => char.charCodeAt(0));
console.log(charCodes); // [97, 98, 99]
```
### 3. Code simulation: Spread Operator internally traverses the process of elements in the Set
```javascript
function spreadSetIntoArray(set) {
    let array = []
    for (item in set) {
        array.push(item) // Add each set item to the array
    }
    return array
}
// Note: In actual JavaScript, the spread syntax simplifies this process to [...set]
```

### 4. Indexed and Non-indexed Data Types & Iteration Methods
- **Indexed Data Types:**
     - *Arrays:* Access elements by their index.
     - *Strings:* Characters can be accessed by their index.
- **Non-indexed Data Types:**
     - *Sets:* No index, elements are unique.
     - *Maps:* Key-value pairs, no index for direct element access.

***Iteration Methods for Non-indexed Data Types:***
```javascript
// Iterating over a Set
const mySet = new Set(['a', 'b', 'c']);
for (let item of mySet) {
    console.log(item); // 'a', 'b', 'c'
}

// Iterating over a Map
const myMap = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`); // 'a: 1', 'b: 2', 'c: 3'
}

// Alternatively, Sets and Maps can also be iterated using forEach:
mySet.forEach(item => console.log(item)); // 'a', 'b', 'c'
myMap.forEach((value, key) => console.log(`${key}: ${value}`)); // 'a: 1', 'b: 2', 'c: 3'
```

# *Better problem-solving ideas*