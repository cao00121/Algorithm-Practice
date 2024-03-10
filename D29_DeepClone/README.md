# *Instruction & Requirements*
The term "deep clone" is not formally defined in JavaScript's language specification, but is generally well understood in the community. A deep clone makes a copy of JavaScript value, leading to a completely new value that has no references pointing back to the properties in the original object (if it's an object). Any changes made to the deep-copied object will not affect the original object.

Implement a `deepClone` function that performs a deep clone operation on JavaScript objects. You can assume the input only contains JSON-serializable values (`null`, `boolean`, `number`, `string`, `Array`, `Object`) and will not contain any other objects like `Date`, `Regex`, `Map` or `Set`.


```javascript
const obj1 = { user: { role: 'admin' } };
const clonedObj1 = deepClone(obj1);

clonedObj1.user.role = 'guest'; // Change the cloned user's role to 'guest'.
clonedObj1.user.role; // 'guest'
obj1.user.role; // Should still be 'admin'.

const obj2 = { foo: [{ bar: 'baz' }] };
const clonedObj2 = deepClone(obj2);

obj2.foo[0].bar = 'bax'; // Modify the original object.
obj2.foo[0].bar; // 'bax'
clonedObj2.foo[0].bar; // Should still be 'baz'.
```

# *My Problem-solving Ideas*

**Check Type:** First, check if the input value is an object. If it's not an object or is null, return the value directly, because primitive data types and null are passed by value in JavaScript and don't require deep cloning.

**Array Handling:** If it's an array, create a new array and recursively perform deep cloning on each element, then place the cloned elements into the new array.

**Object Handling:** If it's an object, create a new object and recursively perform deep cloning on each property value, then assign the cloned property values to the corresponding properties in the new object.

**Return Result:** Return the cloned new array or new object.

# *Better problem-solving ideas*

