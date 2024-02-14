# *Instruction & Requirements*

**Requirements**

`Array.prototype.filter` creates a new array populated with the results of calling a provided function on every element in the calling array.

For sparse arrays (e.g. `[1, 2, , 4]`), the empty values should be ignored while traversing the array (i.e. they should not be in the resulting array).

Implement `Array.prototype.filter`. To avoid overwriting the actual `Array.prototype.filter` which is being used by the autograder, we shall instead implement it as `Array.prototype.myFilter`.

**Examples**

```javascript
[1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]
[1, 2, 3, 4].myFilter((value) => value < 3); // [1, 2]
```

**Notes**

The filter callback function takes in more than just the element! There's also a second parameter for Array.prototype.filter as well. You are recommended to read the specification for Array.prototype.filter on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) Docs before attempting.

# *My Problem-solving Ideas*

**Problem Solving Process and Analysis**

- *Understanding the `Array.prototype.filter()` method*
     - The `Array.prototype.filter()` method creates a new array with all elements that pass the test implemented by the provided function.
     - It can accept an optional second argument to specify the `this` value in the callback function.

- *Implementing the Custom `myFilter` Method*
     1. Define Function Signature
     - Define the `myFilter` method on `Array.prototype`.
     - Accept a callback function (`callbackFn`) and an optional `this` argument (`thisArg`).

     ```javascript
     Array.prototype.myFilter = function(callbackFn, thisArg) {
     // Implementation
     };
     ```
     
     2. Create a New Array
     - Initialize an empty array to store the filtered elements.
     ```javascript
     const result = [];
     ```

     3. Iterate Over the Array
     - Use a `for` loop to iterate over each element of the array.
     - Check if the element exists (to handle sparse arrays) and if it passes the callback function's test.
     ```javascript
     for (let i = 0; i < this.length; i++) {
          if (this.hasOwnProperty(i) && callbackFn.call(thisArg, this[i], i, this)) {
               result.push(this[i]);
          }
     }
     ```

     4. Return the New Array
     - Return the array containing the filtered elements.
     ```javascript 
     return result;
     ```
- *Understanding the Parameters of `callbackFn.call(thisArg, this[i], i, this)`*
     - **`callbackFn`:** The callback function passed to the `myFilter` method. It should accept three parameters (element value, index, array itself) and return a boolean value.

     - **`thisArg`:** An optional parameter used to specify the `this` value in the callback function. If `thisArg` is provided, `this` in the callback function will be set to the value of `thisArg`.
     - **`this[i]`:** The value of the current element being processed in the array.
     - **`i`:** The index of the current element.
     - **`this`:** The array itself on which the `myFilter` method is called.
- *Example Usage*
     ```javascript
     const numbers = [1, 2, 3, 4, 5];
     const evenNumbers = numbers.myFilter(function(value) {
          return value % 2 === 0;
     });
     console.log(evenNumbers); // [2, 4]
     ```

# *Better problem-solving ideas*

**Features of `Object.hasOwn`**
- **`Static Method`:** `Object.hasOwn` is a static method of the Object constructor. It is independent of any object instance and can be used directly on any object.
- **`Safety`:** It provides a safer way to check for an object's own properties. It is not affected by modifications to the `Object.prototype` or the `hasOwnProperty` method.

**Advantages of `Object.hasOwn` over `hasOwnProperty`**
- **`Robustness`:** `Object.hasOwn` is less susceptible to being overridden or deleted compared to `hasOwnProperty`. This makes it more robust and reliable for property existence checks.
- **`Consistency`:** Since `Object.hasOwn` is a static method, it ensures consistent behavior across different objects, even if their prototype chain has been modified.

**Example Code**
```javascript
// Using Object.hasOwn
const obj = { a: 1 };
if (Object.hasOwn(obj, 'a')) {
    console.log('Property "a" exists'); // Output: Property "a" exists
}

// Using hasOwnProperty
if (obj.hasOwnProperty('a')) {
    console.log('Property "a" exists'); // Output: Property "a" exists
}
```

*`Object.hasOwn` offers a more robust and consistent way to check for an object's own properties compared to `hasOwnProperty`, especially in environments where the prototype chain might be modified.*