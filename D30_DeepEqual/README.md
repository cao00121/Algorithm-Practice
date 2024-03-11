# *Instruction & Requirements*
Implement a function `deepEqual` that performs a deep comparison between two values. It returns `true` if two input values are deemed equal, and returns `false` if not.

You can assume there are only JSON-serializable values (numbers, strings, boolean, `null`, objects, arrays).
There wouldn't be cyclic objects, i.e. objects with circular references.

```javascript
deepEqual('foo', 'foo'); // true
deepEqual({ id: 1 }, { id: 1 }); // true
deepEqual([1, 2, 3], [1, 2, 3]); // true
deepEqual([{ id: '1' }], [{ id: '2' }]); // false
```

# *My Problem-solving Ideas*

- **Basic Comparison:** First, check if the two values are the same (including the special case for NaN, as NaN === NaN is false).

- **Type Check:** Check if the types of the two values are the same. If they are different, return false directly.

- **Deep Comparison for Objects and Arrays:**If both values are objects (including arrays), perform a deep comparison. Check if one is an array and the other is not. If so, return false. Check if both objects have the same number of properties. If not, return false. Recursively compare each property value.

- **Return Result:** If all checks pass, return true; otherwise, return false.

# *Better problem-solving ideas*

