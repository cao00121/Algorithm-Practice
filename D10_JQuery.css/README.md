# *Instruction & Requirements*

In Vanilla JavaScript, the way to set styles on an element would be as follows:

```javascript
const buttonEl = document.querySelector('button');
buttonEl.style.color = 'red';
buttonEl.style.backgroundColor = 'tomato';
buttonEl.style.fontSize = '16px';
```
[jQuery](https://jquery.com/) is a library that simplifies `DOM` manipulation (among other things). With jQuery (using the `$` alias function), the above can be simplified into:

```javascript
const buttonEl = $('button');
buttonEl.css('color', 'red');
buttonEl.css('backgroundColor', 'tomato');
buttonEl.css('fontSize', '16px');
```
The return value of most jQuery manipulation APIs return the jQuery object itself, so that method calls can be chained. The above can be further simplified again:

```javascript
$('button')
  .css('color', 'red')
  .css('backgroundColor', 'tomato')
  .css('fontSize', '16px');
```

Additionally, if the second parameter is omitted, the value of that style property is returned.

```javascript
// <button style="color: red">Submit</button>
$('button').css('color'); // 'red'
```

Implement the jQuery single-character function $ which only needs to supports the css() method that either gets the value of a computed style property or sets a CSS property on the matched element.

**Note**

There are some differences with the official `jQuery.css()` implementation:

The official library selects all matched elements and modified all matched elements. However, for this question we can assume there will only be a maximum of one element matching the selector.
jQuery understands and returns the correct value for both `.css('background-color')` and `.css('backgroundColor')` but we only have to support the latter syntax.

# *My Problem-solving Ideas*

1. **Understanding the Problem:**

- I need to implement a function `$` that mimics a simplified version of jQuery's `$` function, supporting only the `css` method for getting and setting CSS styles.

2. **Implementing the `$` Function:**

- I create a function `$` that takes a `selector` as an argument and returns an object containing the `css` method.

- Inside the `$` function, I use `document.querySelector` to select the first element that matches the selector.

3. **Implementing the css Method:**

- The `css` method takes two arguments: `property` and `value`.

- If `value` is not `undefined`, I set the specified `property` to the `value` on the selected element.

- If `value` is `undefined`, I return the current value of the specified `property` using `getComputedStyle`.

4. **Handling Edge Cases:**

- If no element matches the selector, `document.querySelector` returns `null`. I check for this condition and return `undefined` or `this` appropriately to avoid errors.

- When getting a property value, if the property is not set, `getComputedStyle` returns an empty string. I convert this to `undefined` for consistency.

5. **Supporting Chaining:**

- To support chaining, the `css` method returns this (the object containing the `css` method) when setting a property, allowing further methods to be called on it.

6. ***Silent Failure and Chaining:***

- This implementation allows for "silent failure," meaning that if an element does not exist, the code does not throw an error but simply does nothing. 

- This behavior is useful for chaining, as it allows subsequent method calls to be made even if a previous operation did not apply to any element.

# *Better problem-solving ideas*

1. **Similarities:**

- **Basic Structure:** This solution, like the approach we discussed, uses a `$` function to return an object containing the `css` method.

- **Parameter Handling:** The `css` method accepts two parameters, `prop` and `value`, which are used to specify the CSS property and its value, respectively.

- **Chaining Support:** In the case of setting a property value, the `css` method returns this to support chaining.

- **Handling No Matching Elements:** Both in getting and setting property values, the solution handles cases where no matching elements are found to avoid errors.


2. **Differences:**

- **Method for Getting Property Values:** This solution uses `element.style[prop]` to get property values, which means it can only retrieve *inline style values*, not computed style values. In contrast, our discussed approach uses `getComputedStyle(element)[prop]`, which can retrieve computed style values, typically a more accurate method.

- **Handling Empty Strings:** When getting property values, this solution converts empty strings to `undefined`. This is one way to handle it, but it might lead to some inconsistencies since an empty string is actually a valid CSS value. In our discussed approach, the handling of empty strings is done when determining if a property is unset, which might align more with real-world scenarios.