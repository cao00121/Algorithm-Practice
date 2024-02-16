# *Instruction & Requirements*

**Requirements**

`Array.prototype.map` creates a new array populated with the results of calling a provided function on every element in the calling array.

Implement `Array.prototype.map`. To avoid overwriting the actual `Array.prototype.map` which is being used by the autograder, we shall instead implement it as `Array.prototype.myMap`.

**Examples**

```javascript
[1, 2, 3, 4].myMap((i) => i); // [1, 2, 3, 4]
[1, 2, 3, 4].myMap((i) => i * i); // [1, 4, 9, 16]
```

**Notes**

The map callback function takes in more than just the element! There's also a second parameter for `Array.prototype.map` as well. You are recommended to read the specification for `Array.prototype.map` on [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) before attempting.

# *My Problem-solving Ideas*

**Problem Solving Process and Analysis**

**`Understand the problem`:** I first need to understand the purpose of the `Array.prototype.map` method, which is to create a new array with the results of calling a provided function on every element in the original array. My task is to simulate this behavior by implementing a custom `myMap` method.

**Create a new array:** I create a new empty array `result` to store the results of applying the callback function to the elements.

**Iterate over the original array:** I use a `for` loop to iterate through each element of the original array. During this process, I am aware that the array may contain empty slots (sparse array), so I only execute the callback function for existing elements.

**Apply the callback function:** For each existing element, I call the callback function using `callbackFn.call(thisArg, this[i], i, this)`. Here, `thisArg` is optional, and if provided, it will be used as the this value for the callback function; `this[i]` is the current element, `i` is its index, and `this` is the original array.

**Handle sparse arrays:** To maintain the sparseness of the original array, I should also leave empty slots in the new array at the corresponding positions. I can achieve this by directly assigning values to the result array at the specific indices (instead of using the `push` method).

**Return the new array:** After the iteration is complete, I return the new `array` result that stores the processed elements.


# *Better problem-solving ideas*

**Create a new array with the same length:** The author initializes a new array `array` with the same length as the original array. This approach ensures that the new array will have the same length and maintain the sparseness of the original array.

**Iterate over the original array:** The author uses a `for` loop to iterate through each element of the original array.

**Check for the existence of elements:** The author uses `Object.hasOwn(this, k)` to check if the current index `k` has a defined value in the original array. This method is used to handle sparse arrays, ensuring that the callback function is only applied to existing elements.

**Apply the callback function:** For each existing element, the author applies the callback function using `callbackFn.call(thisArg, this[k], k, this)`. This ensures that the callback function is called with the correct `this` value (if thisArg is provided), the current element, its index, and the original array.

**Return the new array:** After iterating through the original array, the author returns the new array `array` that contains the results of applying the callback function to each existing element.

## 👁 *Knowledge point supplement*

- **Using `Object.hasOwn`:** This method is a modern and precise way to check if an object has a specific property as its own (not inherited). It's useful for handling sparse arrays, but it's important to note that it may not be supported in all environments.

- **Preserving array length and sparseness:** By initializing the new array with the same length as the original and using `Object.hasOwn` to check for element existence, the author's solution effectively preserves the length and sparseness of the original array.