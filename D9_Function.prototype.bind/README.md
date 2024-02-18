# *Instruction & Requirements*

**Requirements**

The `Function.prototype.bind()` method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

Source: [*Function.prototype.bind() - Javascript | MDN*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)

**Examples**

```javascript
const john = {
  age: 42,
  getAge: function () {
    return this.age;
  },
};

const unboundGetAge = john.getAge;
console.log(unboundGetAge()); // undefined

const boundGetAge = john.getAge.myBind(john);
console.log(boundGetAge()); // 42
```

**Notes**

Implement your own `Function.prototype.bind` without calling the native bind method. To avoid overwriting the actual `Function.prototype.bind`, implement the function as `Function.prototype.myBind`.

# *My Problem-solving Ideas*

I explored the concept of the `bind` method in JavaScript, which allows us to set the `this` context for a function and predefine arguments for future calls. 

1. My approach to mimicking `bind` involved creating a new function that uses the `apply` method to invoke the original function with a specified `thisArg` and a combination of preset arguments (`argArray`) and additional arguments (`additionalArgs`). 

2. The `concat` method is used to merge these arguments into a single array, ensuring that all parameters are correctly passed to the original function when the bound function is called.

## 👁 *Knowledge point supplement*

The syntax for the `apply` method is: `function.apply(thisArg, [argsArray])`:

- `thisArg` is the value to be used as this when the function is called;
- `argsArray` is an array or an array-like object whose elements are passed as individual arguments to the function.

## *More understanding about `OOP`*

1. About `Encapsulation`: The `bind` method is encapsulated within the `Function` object in native JavaScript, meaning it is packaged and hidden away from the global scope. This encapsulation ensures that all functions created globally can access and use the `bind` method without needing to define it themselves.

2. About `Inheritance`: All functions inherit the `bind` method from the `Function` object, thanks to JavaScript's prototypal inheritance. This means that every function, by default, has access to the `bind` method without needing to recreate it, demonstrating the power of inheritance in `OOP`.

3. Understanding `OOP`: This exercise has deepened my understanding of `OOP`, particularly the concepts of encapsulation and inheritance. It has shown me how these principles are applied in JavaScript and how they contribute to the language's flexibility and reusability.

**Example**
```javascript
// Assume that we got this function
function sum(a, b, c) {
  return a + b + c;
}

// I have an array contains three numbers
const numbers = [10, 20, 30];

// I can use `apply` method to call the `sum` function with the `numbers` array as arguments:
const result = sum.apply(null, numbers);

console.log(result); // 60
```

In this example, I pass `null` as the `thisArg` to the apply method since the `sum` function does not rely on the this value. The elements of the `numbers` array are passed as individual arguments to the `sum` function, resulting in the calculation of the sum `60`.


# *Better problem-solving ideas*

