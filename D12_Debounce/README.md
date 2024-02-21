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

**This problem explores two important concepts in programming: [Curry](#curry) and [Closures]().**

### Curry

- Currying is a technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument. 

- It is commonly used in functional programming to create more modular and reusable code. 

- For example, a simple currying of an addition function might look like this:

```javascript
function add(a) {
  return function(b) {
    return a + b;
  };
}

const addFive = add(5);
console.log(addFive(3)); // Outputs: 8
```
In this example, the `add` function is curried to create a new function `addFive` that always adds 5 to its argument.

### Closures

- A closure is a combination of a function and the lexical environment within which that function was declared. 

- This environment consists of any local variables that were in-scope at the time the closure was created. 

- Closures are commonly used to create private variables or functions and to maintain state between function calls. Here's an example:

```javascript
function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}

const counter = makeCounter();
console.log(counter()); // Outputs: 0
console.log(counter()); // Outputs: 1
```

In this example, the inner function has access to the `count` variable from the outer function, maintaining its state between calls.

**Solution to the Problem**

The problem at hand uses both curry and closures. The `sum` function is curried to accept one argument at a time and uses a closure to maintain the state of the total sum. The solution can be outlined as follows:

1. The `sum` function takes an initial value and returns a new function (`innerSum`).

2. `innerSum` takes the next value to add. If a value is provided, it adds it to the total sum and returns a new curried function with the updated sum. If no value is provided, it returns the total sum.

3. This process allows for the function to be called multiple times in a chain, each time adding a new value to the total sum, until no argument is passed, at which point the total sum is returned.

# *Better problem-solving ideas*

The author adopts the closure solution just like us, and there is nothing much to say. But what's more remarkable is that he used ternary expression.