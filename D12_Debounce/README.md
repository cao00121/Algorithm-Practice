# *Instruction & Requirements*

Debouncing is a technique used to control how many times we allow a function to be executed over time. When a JavaScript function is debounced with a wait time of X milliseconds, it must wait until after X milliseconds have elapsed since the debounced function was last called. You almost certainly have encountered debouncing in your daily lives before — when entering an elevator. Only after X duration of not pressing the "Door open" button (the debounced function not being called) will the elevator door actually close (the callback function is executed).

Implement a debounce function which accepts a callback function and a `wait` duration. Calling `debounce()` returns a function which has debounced invocations of the callback function following the behavior described above.

**Example**

```javascript
let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.

// t = 100: increment() was invoked and i is now 1.
```

`debounceIncrement()` is called multiple times.


```javascript
let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.
//  Call debouncedIncrement() again.
debouncedIncrement(); // i = 0

// t = 100: i is still 0 because it has only
//  been 50ms since the last debouncedIncrement() at t = 50.

// t = 150: Because 100ms have passed since
//  the last debouncedIncrement() at t = 50,
//  increment was invoked and i is now 1 .
```

**Follow Up**
- Debounce with a `cancel()` method to cancel delayed invocations and a `flush()` method to immediately invoke them.

- Implement throttle, which is similar to debounce but a little different.



# *My Problem-solving Ideas*
[Debouncing](https://lodash.com/docs/4.17.15#debounce) is an optimization technique used to reduce the frequency of function execution. It achieves this by delaying the execution of the function, and if the function is called again within a specified wait time, the timer starts over.

**In implementing debounce functionality, we need to focus on two main parts:**
- Passing arguments: Including the callback function and the wait time.
- When the debounce function is called again before the wait time expires, clear the previous timer and set a new timer. 
- In the new timer, we use the `apply` method to ensure that the execution context and parameters of the callback function remain consistent with the previous call.

## 👁 *Knowledge point supplement*
`setTimeout` is a function that sets a timer which executes a callback function after a specified number of milliseconds (the wait time). The return value of this function is a timer identifier, which is a unique positive integer used to identify the timer. This timer identifier can be used to cancel the timer.

```javascript
// Set a timer to execute a callback function after 2 seconds
let timerId = setTimeout(() => {
  console.log("This message will be displayed after 2 seconds");
}, 2000);
```
`clearTimeout` is a function that cancels a timer set by `setTimeout`. It takes one parameter, which is the identifier of the timer that needs to be canceled. If the timer identifier is valid, the corresponding timer will be canceled, and the callback function will not be executed.

```javascript
// Cancel the timer
clearTimeout(timerId);
```

In the implementation of a debounce function, we use `setTimeout` to delay the execution of the callback function and assign the returned timer identifier to a variable (e.g., `timeout`). This way, if the debounce function is called again within the wait time, we can use `clearTimeout` with the previously saved timer identifier to cancel the previous timer and then set a new timer. This is why `setTimeout` needs to set a timer identifier to a variable for `clearTimeout` to be able to cancel it effectively.

# *Better problem-solving ideas*

The author's approach in this solution is quite similar to ours, but there are still many valuable aspects worth learning from.

- **Default Parameter Value:** The author sets a default value of `0` for the `wait` parameter, which enhances the robustness of the function, ensuring that it can work normally even if the `wait` parameter is not passed. This is a good programming practice that can reduce potential errors when calling the function.

- **Rest Parameters:** The author uses rest parameters `(...args)` to collect all arguments passed to the returned function. This makes the code more concise and easier to understand. Rest parameters are a modern JavaScript feature that can improve the readability and flexibility of the code.

- **Arrow Function:** The author uses an arrow function in `setTimeout`, which automatically binds the value of `this` to be the same as the outer function's `this`. This is a modern syntax feature that makes the code more concise and avoids common errors related to this binding. In the context of a debounce function, `this` ensures that the callback function maintains the correct context when executed.