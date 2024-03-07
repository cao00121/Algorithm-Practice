# *Instruction & Requirements*
Given a list of strings, implement a function `listFormat` that returns the items concatenated into a single string. A common use case would be in summarizing the reactions for social media posts.

The function should support a few options as the second parameter:

- `sorted`: Sorts the items by alphabetical order.
- `length`: Show only the first `length` items, using "and X other(s)" for the remaining. Ignore invalid values (negative, 0, etc).
- `unique`: Remove duplicate items.

```javascript
listFormat([]); // ''

listFormat(['Bob']); // 'Bob'
listFormat(['Bob', 'Alice']); // 'Bob and Alice'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John']);
// 'Bob, Ben, Tim, Jane and John'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 3,
}); // 'Bob, Ben, Tim and 2 others'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 4,
}); // 'Bob, Ben, Tim, Jane and 1 other'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 3,
  sorted: true,
}); // 'Ben, Bob, Jane and 2 others'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John', 'Bob'], {
  length: 3,
  unique: true,
}); // 'Bob, Ben, Tim and 2 others'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 3,
  unique: true,
}); // 'Bob, Ben, Tim and 2 others'

listFormat(['Bob', 'Ben', '', '', 'John']); // 'Bob, Ben and John'
```

# *My Problem-solving Ideas*
This problem requires us to implement a `listFormat` function that takes an array of strings and an optional configuration object as parameters and returns a formatted string. The function needs to support features such as sorting, deduplication, and length limitation.

The solution can be divided into two parts:

- **Processing the input list:** Sort, deduplicate, and filter out empty strings from the list based on the configuration options.

- **Formatting the string:** Join the elements of the list into a string based on the length of the list and the configuration options.

The main challenge we encountered was how to correctly handle the `length` and `unique` options. Initially, we performed deduplication after handling the length limitation, which led to a result that might contain fewer elements than the specified length when the list had duplicate elements. To resolve this issue, we adjusted the order of the logic to deduplicate first and then handle the length limitation.

Additionally, we faced the problem that the returned string should not contain separators when the list is empty. We solved this by checking the length of the list before returning the result.

# *Better problem-solving ideas*

