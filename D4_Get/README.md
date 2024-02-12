# *Instruction & Requirements*
Before the optional chaining operator `(?.)` existed, it was sometimes troublesome to access deeply-nested properties in huge JavaScript objects when some of the intermediate properties might not be present.


```javascript
const john = {
  profile: {
    name: { firstName: 'John', lastName: 'Doe' },
    age: 20,
    gender: 'Male',
  },
};

const jane = {
  profile: {
    age: 19,
    gender: 'Female',
  },
};

function getFirstName(user) {
  return user.profile.name.firstName;
}
```

Doing `getFirstName(john)` works but `getFirstName(jane)` will error because the `name` property doesn't exist for `jane.profile`.

**Lodash's Get method**

Lodash's `_.get` method was created as a solution for such use cases.

Let's write our own version as a `get` function. The function gets the value at `path` of `object`. If the resolved value is `undefined`, the `defaultValue` is returned in its place. The function signature is as such:

```javascript
get(object, path, [defaultValue]);
```

`object`: The object to query.
`path`: The path of the property to get. It can be a string with . as the separator between fields, or an array of path strings.
`defaultValue`: Optional parameter. The value returned if the resolved value is `undefined`.

**Examples**

```javascript
get(john, 'profile.name.firstName'); // 'John'
get(john, 'profile.gender'); // 'Male'
get(jane, 'profile.name.firstName'); // undefined
```

Arrays can also be accessed if numerical indices are provided.
```javascript
get({ a: [{ b: { c: 3 } }] }, 'a.0.b.c'); // 3
```

There's no need to support syntax resembling `get(object, 'a[0].b.c')`

# *My Problem-solving Ideas*

1. **Understanding the Problem:** This task focuses on how to safely access nested properties within a JavaScript object, especially when there's uncertainty about the existence of these properties. This is particularly important when dealing with complex data structures, such as data fetched from APIs.

2. **Handling the Path Parameter:** We need to access the properties of the object based on the provided path parameter `pathParam`. This path can be a string or an array of strings, with property names in a string path separated by dots `(.)`. First, we convert the string path into an array to unify the logic for traversing the path.

3. **Traversing the Path Array:** We use a loop or recursion to traverse each item of the path array. At each step, we attempt to access the current property, requiring us to retrieve the corresponding key value from the current object.

4. **Exception Handling:** During the access process, if we encounter that the current object is `null` or `undefined`, or the current property does not exist (i.e., the result is `undefined`), we stop the traversal and return the default value `defaultValue`. This design prevents errors when accessing a non-existent property and enhances code robustness.

5. **Returning the Result:** If we successfully traverse the entire path and find the target value, we return that value. Otherwise, according to the function's design, if a property along the path does not exist, we return defaultValue. If defaultValue is not provided, undefined is returned by default in cases where the property does not exist.

***Optimization Points:***

- We `use == null` to check for both null and undefined simultaneously because `null == undefined` is `true` in JavaScript. This approach simplifies the code, allowing us to handle these two cases with a single condition.
- We explicitly compare with `=== undefined` to ensure that defaultValue is returned only when the property truly does not exist (i.e., the value is `undefined`). This avoids confusion with `null` or other `falsy` values.