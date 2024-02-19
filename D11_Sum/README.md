# *Instruction & Requirements*

Implement a `sum` function that accepts a number and allows for repeated calling with more numbers. Calling the function without an argument will sum up all the arguments thus far and return the total.
**Example**

```javascript
sum(1)(); // 1
sum(1)(2)(); // 3
sum(1)(2)(-3)(); // 0
```


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