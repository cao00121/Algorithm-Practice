# *Instruction & Requirements*

**Requirements**

`Array.prototype.reduce` is a way of "reducing" elements in an array by calling a "reducer" callback function on each element of the array in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

Implement `Array.prototype.reduce`. To avoid overwriting the actual `Array.prototype.reduce` which is being used by the autograder, we shall instead implement it as `Array.prototype.myReduce`.

**Examples**

```javascript
[1, 2, 3].myReduce((prev, curr) => prev + curr, 0); // 6
[1, 2, 3].myReduce((prev, curr) => prev + curr, 4); // 10
```

**Notes**

There are some nuances regarding how the Array.prototype.reduce function works and what values are being passed to the reducer callback. You are recommended to read the specification for Array.prototype.reduce on [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) before attempting.

# *My Problem-solving Ideas*

**Problem Solving Process and Analysis**

To solve this problem, I need to have a clear understanding of the logic behind the `reduce` method, especially how it handles the initial value. 

- **If an initial value is provided:** I start the accumulation from that value and iterate through the entire array. 

- **If no initial value is provided:** I start the accumulation from the first non-undefined value in the array and begin the iteration from the next index. 

1. The key is to include an `if-else` statement to handle these two scenarios separately. 
2. Then, outside this conditional logic, I start from the determined starting index and iterate through the entire array to complete the accumulation.

**Additional Cautious**

An unexpected learning from this implementation is the importance of handling the case where ***the array is empty and no initial value is provided***. In such a scenario, it's crucial to throw a `TypeError`, as per the behavior of the native `Array.prototype.reduce` method. 

This check ensures that the method behaves consistently with the standard, providing a clear error message when attempting to reduce an empty array without an initial value.

# *Imperfect problem-solving ideas*

- **Check for Initial Value:** The author uses a variable `noInitialValue` to mark whether an initial value has been provided. This allows for reuse of this flag in subsequent logic, making the code more concise.

- **Handle Empty Array:** If the array is empty and no initial value is provided, a `TypeError` is thrown. This complies with the specification of the `reduce` method.

- **Initialize Accumulator and Starting Index:** Depending on whether an initial value is provided, the accumulator `acc` and the starting index `startingIndex` are initialized. If no initial value is provided, the accumulator is set to the first element of the array, and the starting index is set to 1. If an initial value is provided, the accumulator is set to that initial value, and the starting index is set to 0.

- **Iterate Over the Array:** Starting from `startingIndex`, the array is iterated over, using `Object.hasOwn(this, k)` to ensure that only the array's own elements are processed. For each element, the accumulator `acc` is updated using the callback function.

**Critical Mistake**

The author's critical mistake lies in handling the case where ***no initial value is provided and the first element of the array might be empty***. The author assumes that the first element of the array is always valid and always starts iteration from index 1. This can lead to skipping elements that need to be accumulated in sparse arrays, resulting in incorrect results. The correct approach should be, in the absence of an initial value, to find the first non-empty element of the array as the initial value and start the iteration from the index following that element.
