# *Instruction & Requirements*
Implement a function `flatten` that returns a newly-created array with all sub-array elements concatenated recursively into a single level.

**Examples**
```javascript
// Single-level arrays are unaffected.
flatten([1, 2, 3]); // [1, 2, 3]

// Inner arrays are flattened into a single level.
flatten([1, [2, 3]]); // [1, 2, 3]
flatten([
  [1, 2],
  [3, 4],
]); // [1, 2, 3, 4]

// Flattens recursively.
flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]
```
# *My Problem-solving Ideas*

- **Define a function flatten:** We start by defining the function `flatten` that takes an array `value` as its argument.

- **Create a result array:** Inside the `flatten` function, we create an empty array `result` that will store the flattened elements.

- **Define a helper function `flattenArray`:** We define an inner helper function `flattenArray` that takes an array `arr` as its argument. This function is responsible for the recursive flattening of the array.

- **Iterate over the array:** In the `flattenArray` function, we use a `forEach` loop to iterate over each element of the array `arr`.

- **Check for nested arrays:** For each element, we check if it is an array using `Array.isArray(item)`. If it is an array, we recursively call `flattenArray` on this element to flatten it further.

- **Push non-array elements to the result:** If the element is not an array, we push it directly to the `result` array.

- **Call the helper function:** Back in the `flatten` function, we call the `flattenArray` function, passing in the original `value` array. This starts the recursive flattening process.

- **Return the flattened array:** Finally, after the recursive process is complete, we return the `result` array, which now contains all the elements from the original array and its sub-arrays, flattened into a single level.


# *Better problem-solving ideas*

The author's solution is an iterative approach to flattening an array. Here's a summary of the solution and a comparison with the recursive approach we discussed earlier:

**Use of an iterative approach:** The author uses a while loop to iteratively flatten the array, instead of recursion. This can be more efficient in terms of memory usage, especially for deeply nested arrays, as it avoids the memory overhead of recursive function calls.

**Checking for array type:** The author uses `Array.isArray(item)` to check if an item is an array, similar to the recursive approach.

**Creating a copy of the input array:** The author makes a copy of the input array using `value.slice()` to avoid mutating the original array. This is a good practice in functional programming.

**Flattening the array:** The author uses a while loop to repeatedly extract items from the beginning of the copied array using `copy.shift()`. If the item is an array, its elements are spread and added back to the beginning of the copied array using `copy.unshift(...item)`. If the item is not an array, it is added to the result array.

**Returning the flattened array:** The result array is returned after the while loop has processed all items.

### Differences and Key Takeaways:

**Iterative vs. Recursive:** The author's solution uses an iterative approach, which can be more memory-efficient for deeply nested arrays compared to the recursive approach.

**Use of shift and unshift:** The author uses `shift`()`and `unshift(...)` methods to manipulate the copied array, which is a different approach compared to the recursive flattening in our solution. This method effectively turns the copied array into a queue that is processed until it's empty.

**Handling of nested arrays:** Both solutions handle nested arrays effectively, but the iterative approach may be more suitable for arrays with a high level of nesting to avoid potential stack overflow issues with recursion.

**No explicit helper function:** The author's solution does not use an explicit helper function like `flattenArray` in the recursive approach. Instead, the flattening logic is integrated into the while loop.