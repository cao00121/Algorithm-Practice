# *Instruction & Requirements*
*The `Promise.allSettled()` method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.*

*However, if and only if an empty iterable is passed as an argument, `Promise.allSettled()` returns a `Promise` object that has already been resolved as an empty array.*

*For each outcome object, a `status` string is present. If the status is `'fulfilled'`, then a value is present. If the status is `'rejected'`, then a reason is present. The value (or reason) reflects what value each promise was fulfilled (or rejected) with.*

`Promise.allSettled()` is frequently used when there are multiple independent asynchronous tasks and we want to know the result of each promise, regardless of whether they were fulfilled or rejected.

Let's implement our own version of `Promise.allSettled()`, a `promiseAllSettled` function, with the difference being the function takes in an array instead of an iterable. Be sure to read the description carefully and implement accordingly!



```javascript
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('foo');
  }, 100);
});

await promiseAllSettled([p0, p1, p2]);
// [
//   { status: 'fulfilled', value: 3 },
//   { status: 'fulfilled', value: 42 },
//   { status: 'rejected', reason: 'foo' },
// ];
```

# *My Problem-solving Ideas*

1. We define a function named `promiseAllSettled` that takes an iterable parameter, which is an array containing multiple Promises.

2. The function returns a new Promise object. The `resolve` method of this Promise will be called once all the input Promises have been settled.

3. We create a `results` array to store the results of each Promise, and a `count` counter to keep track of how many Promises are still pending.

4. If the input array is empty, we immediately resolve the outer Promise with an empty array.

5. We iterate over the input array and handle each Promise.

6. For each Promise, we use `Promise.resolve()` to ensure that even if the input is not a Promise, it will be treated as a resolved Promise. Then, we use `.then()` and `.catch()` methods to handle the fulfillment and rejection of the Promise. Regardless of whether the Promise is fulfilled or rejected, we record the result in the `results` array and decrement the count counter. Once all Promises have been settled (i.e., `count` is 0), we resolve the outer Promise and return the `results` array.

Through this implementation, we created a function that takes an array of Promises and returns a new Promise that resolves once all input Promises have been settled, providing an array of results for each Promise. Each result is an object containing a `status` field (indicating whether the Promise was fulfilled or rejected) and a `value` or `reason` field (depending on whether the Promise was fulfilled or rejected).

# *Better problem-solving ideas*

