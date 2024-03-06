# *Instruction & Requirements*
Implement a function jsonStringify, similar to JSON.stringify that converts a JavaScript value into a JSON string.

Only JSON-serializable values (i.e. boolean, number, null, array, object) will be present in the input value.
Ignore the [second and the third](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#parameters) optional parameters in the original API.


```javascript
jsonStringify({ foo: 'bar' }); // '{"foo":"bar"}'
jsonStringify({ foo: 'bar', bar: [1, 2, 3] }); // '{"foo":"bar","bar":[1,2,3]}'
jsonStringify({ foo: true, bar: false }); // '{"foo":true,"bar":false}'
```
other types:

```javascript
jsonStringify(null); // 'null'
jsonStringify(true); // 'true'
jsonStringify(false); // 'false'
jsonStringify(1); // '1'
jsonStringify('foo'); // '"foo"'
```

# *My Problem-solving Ideas*
**Primitive Types:** For primitive types like `null`, strings, numbers, and booleans, the conversion is straightforward. We convert `null` to `"null"`, add double quotes around strings, and convert numbers and booleans to their string representations.

**Arrays:** For arrays, we iterate over each element, recursively call `jsonStringify` to convert each element into a JSON string, and then join these strings with commas. The entire array is then enclosed in square brackets.

**Objects:** For objects, we iterate over each key-value pair. The key is always a string, so we enclose it in double quotes. The value is recursively processed using `jsonStringify`. Each key-value pair is joined by a colon, and multiple pairs are separated by commas. The entire object is then enclosed in curly braces.

# *Better problem-solving ideas*

