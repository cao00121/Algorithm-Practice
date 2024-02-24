# *Instruction & Requirements*

`classnames` is a commonly-used utility in modern front end applications to conditionally join CSS class names together. If you've written React applications, you likely have used a similar library.

Implement the `classnames` function.

Examples
```javascript
classNames('foo', 'bar'); // 'foo bar'
classNames('foo', { bar: true }); // 'foo bar'
classNames({ 'foo-bar': true }); // 'foo-bar'
classNames({ 'foo-bar': false }); // ''
classNames({ foo: true }, { bar: true }); // 'foo bar'
classNames({ foo: true, bar: true }); // 'foo bar'
classNames({ foo: true, bar: false, qux: true }); // 'foo qux'
```

Arrays will be recursively flattened as per the rules above.

```javascript
classNames('a', ['b', { c: true, d: false }]); // 'a b c'
```

Values can be mixed.

```javascript
classNames(
  'foo',
  {
    bar: true,
    duck: false,
  },
  'baz',
  { quux: true },
); // 'foo bar baz quux'
```

Falsey values are ignored.

```javascript
classNames(null, false, 'bar', undefined, { baz: null }, ''); // 'bar'
```
In addition, the returned string should not have any leading or trailing whitespace.

# *My Problem-solving Ideas*

The task is to implement a `classNames` function that takes multiple arguments of different types (strings, numbers, objects, and arrays) and returns a string containing CSS class names separated by spaces. The class names in this string should be separated by spaces and should ignore any falsy values (such as `false`, `null`, `undefined`, `0`, etc.).

**Solution Method:**
We use recursion and iteration to handle different types of arguments and decide whether to add them to the final class name string based on their values.

**Solution Steps:**

- **Initialize an empty array `classes`:** This array is used to temporarily store all valid class names.

- **Iterate over all arguments:** We use a `forEach` loop to iterate over all the arguments received by the function.

- **Handle string arguments:** If the argument is a non-empty string `(typeof arg === 'string' && arg.trim() !== '')`, we add this string to the `classes` array.
  
- **Handle number arguments:** If the argument is a non-zero number `(typeof arg === 'number' && arg !== 0)`, we convert this number to a string and add it to the classes array.
  
- **Handle array arguments:** If the argument is an array `(Array.isArray(arg))`, we recursively call the `classNames` function to handle this array and split the resulting string (a string of class names separated by spaces) into individual class names, which are then added to the `classes` array.
- **Handle object arguments:** If the argument is a non-empty object `(typeof arg === 'object' && arg !== null)`, we iterate over the key-value pairs of this object. For each key-value pair, if the value is true `(arg[key])`, we add the key (which is the class name) to the `classes` array.

- **Generate the final class name string:** Finally, we use the `join(' ')` method to concatenate all elements in the `classes` array into a string separated by spaces, and use the `trim()` method to remove any leading or trailing spaces. This string is the final `class` name string, which can be directly used in the class attribute of an HTML element.


# *Better problem-solving ideas*

The author's solution involves handling each data type separately and using recursion for array types. The solution uses an array, `classes`, to collect all the class names throughout the function's execution. Here are the key points in handling each data type:

- **Falsy values:** These are ignored.

- **String and Number:** These are added to the `classes` collection.

- **Array:** The `classNames` function is invoked recursively on the array elements.

- **Object:** The function loops through the key/value pairs and adds the keys with truthy values to the classes collection.

## Points to Learn and Consider:

- The use of recursion to handle nested arrays is a key aspect of this solution. It allows for a clean and concise way to process potentially deeply nested structures.

- The use of different data structures (arrays, objects) and their manipulation is a good practice in handling complex data scenarios.

- The separation of concerns in handling each data type separately helps in maintaining the readability and modularity of the code.