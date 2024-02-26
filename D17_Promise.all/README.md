# *Instruction & Requirements*
`Promise.all()` is a method that takes an iterable of elements (usually `Promises`) as an input, and returns a single `Promise` that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.

Source: [*Promise.all() - Javascript | MDN*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

`Promise.all()` is frequently used when there are multiple concurrent API requests and we want to wait for all of them to have completed to continue with code execution, usually because we depend on data from both responses.

```javascript
const [userData, postsData, tagsData] = await Promise.all([
  fetch('/api/user'),
  fetch('/api/posts'),
  fetch('/api/tags'),
]);
```
Let's implement our own version of `Promise.all()`, a `promiseAll` function, with the difference being the function takes in an array instead of an iterable. Be sure to read the description carefully and implement accordingly!

**Examples**
```javascript
// Resolved example.
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});

await promiseAll([p0, p1, p2]); // [3, 42, 'foo']
```

```javascript
// Rejection example.
const p0 = Promise.resolve(30);
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('An error occurred!');
  }, 100);
});

try {
  await promiseAll([p0, p1]);
} catch (err) {
  console.log(err); // 'An error occurred!'
}
```
# *My Problem-solving Ideas*

**Solution Approach:**

- Create a new Promise: This Promise will resolve when all input Promises are resolved, or will reject immediately if any of the Promises are rejected.

- Handle Input: Ensure that the input is an array. If not, throw an error. If the array is empty, resolve the entire `promiseAll` immediately.

- Iterate through the Array: For each element in the array, use `Promise.resolve()` to ensure it is a Promise.

- Collect Results: As each Promise resolves, store its result in the corresponding position in the `results` array.

- Track Resolved Promises: Use a variable (such as `resolvedCount`) to keep track of the number of Promises that have been resolved. When all Promises are resolved, resolve the entire `promiseAll` with the `results` array.

- Handle Rejection: If any Promise is rejected, reject the entire `promiseAll` immediately and return the reason for the rejection.

**Points to Pay Special Attention to:**

- Input Validation: Ensure that the input is an array.

- Handling Empty Arrays: If the input array is empty, resolve the entire `promiseAll` immediately.

- Storing Results: Ensure that the results are stored in the order of the Promises in the input array.

- Immediate Rejection: If any Promise is rejected, the entire `promiseAll` should be rejected immediately.

**Knowledge Points Used:**

- Promise: Understand the basic concepts and usage of Promises.

- Array Handling: Use `forEach` to iterate through arrays, and use indexes to store results.

- Asynchronous Programming: Understand asynchronous operations and how to use the `then` and catch methods to handle the resolution and rejection of Promises.

# *Better problem-solving ideas*

