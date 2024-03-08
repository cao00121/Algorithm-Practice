# *Instruction & Requirements*
*`Promise.any()` takes an iterable of elements (usually `Promises`). It returns a single promise that resolves as soon as any of the elements in the iterable fulfills, with the value of the fulfilled promise. If no promises in the iterable fulfill (if all of the given elements are rejected), then the returned promise is rejected with an `AggregateError`, a new subclass of Error that groups together individual errors.*

*If an empty iterable is passed, then the promise returned by this method is rejected synchronously. The rejected reason is an `AggregateError` object whose errors property is an empty array.*

Let's implement our own version of `Promise.any()`, a `promiseAny` function, with the difference being the function takes in an array instead of an iterable and `AggregateErrors` returned just have to return an array of error reasons, the message doesn't have to be set. Refer to the `AggregateError` constructor examples on MDN.

Be sure to read the description carefully and implement accordingly!

```javascript
const p0 = Promise.resolve(42);
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(21);
  }, 100);
});

await promiseAny([p0, p1]); // 42
```

```javascript
const p0 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 100);
});
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Err!');
  }, 400);
});

await promiseAny([p0, p1]); // 42
```

```javascript
const p0 = new Promise((resolve) => {
  setTimeout(() => {
    reject(42);
  }, 400);
});
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Err!');
  }, 100);
});

try {
  await promiseAny([p0, p1]);
} catch (err) {
  console.log(e instanceof AggregateError); // true
  console.log(e.errors); // [ 42, "Err!" ]
}
```


# *My Problem-solving Ideas*

- Create a new Promise.

- Check if the input array is empty. If it is, reject synchronously with an `AggregateError` containing an empty array.

- Iterate over the input array and use `Promise.resolve()` on each element to ensure it is a Promise.

- If any Promise resolves, resolve the outer Promise with its value.

- If a Promise is rejected, record the error and check if all Promises have failed. If so, reject the outer  Promise with an `AggregateError` containing all errors.

- Pay attention to handling the order of asynchronous operations and error handling.


# *Better problem-solving ideas*

