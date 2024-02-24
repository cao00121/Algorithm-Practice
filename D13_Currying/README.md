# *Instruction & Requirements*

Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each takes a single argument.

Implement the `curry` function which accepts a function as the only argument and returns a function that accepts single arguments and can be repeatedly called until at least the minimum number of arguments have been provided (determined by how many arguments the original function accepts). The initial function argument is then invoked with the provided arguments.

**Example**

```javascript
function add(a, b) {
  return a + b;
}

const curriedAdd = curry(add);
curriedAdd(3)(4); // 7

const alreadyAddedThree = curriedAdd(3);
alreadyAddedThree(4); // 7
```

```javascript
function multiplyThreeNumbers(a, b, c) {
  return a * b * c;
}

const curriedMultiplyThreeNumbers = curry(multiplyThreeNumbers);
curriedMultiplyThreeNumbers(4)(5)(6); // 120

const containsFour = curriedMultiplyThreeNumbers(4);
const containsFourMulFive = containsFour(5);
containsFourMulFive(6); // 120
```



# *My Problem-solving Ideas*

Currying is a technique that transforms a function that takes multiple arguments into a function that takes one argument at a time. I consider it a means of encapsulation that makes function calls more concise and efficient.

- The process in this question involves creating a currying function that accepts another function as a parameter. 

- Then, we use `this` to point to our context object and store it in a variable (which should refer to the collection of other parameters not yet passed in). 
 
- Next, we judge the length of the function's parameters. When the length is greater than or equal to the actual number of parameters required by the function, we consider that there are enough parameters, so we call the function passed into the currying function and execute these passed-in parameters. 

- Conversely, if there are not enough parameters, we continue to return a new function to receive more parameters until all parameters are received.

# *Better problem-solving ideas*

The author's solution mainly includes the following points:

- **Using Closures:** The author uses closures to maintain the state of arguments between function calls, which is key to implementing currying.

- **Argument Length Check:** The author decides whether to call the original function based on comparing the length of the current arguments with the length of the arguments required by the original function.

- **Handling Special Cases:** The author considers some special cases, such as how to handle when the passed argument is `undefined` or when no arguments are passed.

## Points worth learning:

- **Application of Closure:** Closures are a very powerful feature in JavaScript. Understanding and mastering the use of closures can help us better manage and maintain state in many scenarios.

- **Flexible Argument Handling:** The author demonstrates how to flexibly handle function arguments, which is a very practical skill in actual development.

## *Knowledge point supplement*

`call`, `apply`, and `bind` are all methods used in JavaScript to set the `this` context of a function. They are similar in that they all allow you to explicitly define what `this` should refer to when a function is invoked. However, they have differences in how they are used and in certain details:

1. `call`:

- **Concept:** The `call` method calls a function with a given this value and arguments provided individually.

- **Usage:** `func.call(thisArg, arg1, arg2, ...)`

- **Example:**
```javascript
function greet(message) {
  console.log(`${message}, ${this.name}`);
}
const person = { name: 'Alice' };
greet.call(person, 'Hello'); // Output: "Hello, Alice"
```

2. `apply`:

- **Concept:** The `apply` method calls a function with a given `this` value and arguments provided as an array (or an array-like object).

- **Usage:** `func.apply(thisArg, [argsArray])`

- **Example:**
```javascript
function greet(message) {
  console.log(`${message}, ${this.name}`);
}
const person = { name: 'Bob' };
greet.apply(person, ['Hi']); // Output: "Hi, Bob"
```

3. `bind`:

- **Concept:** The `bind` method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

- **Usage:** `const boundFunc = func.bind(thisArg, arg1, arg2, ...)`

- **Example:**

```javascript
function greet(message) {
  console.log(`${message}, ${this.name}`);
}
const person = { name: 'Charlie' };
const boundGreet = greet.bind(person, 'Greetings');
boundGreet(); // Output: "Greetings, Charlie"
```

***Differences:***
- `call` and `apply` are very similar; the main difference is that `call` takes an argument list, while `apply` takes a single array of arguments.

- `bind` is different from both `call` and `apply` because it returns a new function with the bound `this` value, instead of immediately invoking the function. The bound function can be called later with additional arguments.