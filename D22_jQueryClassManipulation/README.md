# *Instruction & Requirements*
Before `Element.classList` and `DOMTokenList` were part of the browser standards, it was a hassle to manipulate classes on a DOM element.

jQuery is a library that simplifies DOM manipulation (among other things). jQuery (using the `$` alias function), provided convenient APIs to toggle, add, and remove classes from elements via `.toggleClass()`, `.addClass()` and `.removeClass()`.


```javascript
// <button class="foo bar">Click me</button>
$('button').toggleClass('bar'); // <button class="foo">Click me</button>
$('button').addClass('baz'); // <button class="foo baz">Click me</button>
$('button').removeClass('foo'); // <button class="baz">Click me</button>
$('button').toggleClass('bar'); // <button class="baz bar">Click me</button>
```
The return value of most jQuery manipulation APIs is the jQuery object itself so that method calls can be chained. The above can be further simplified again:
```javascript
// <button class="foo bar">Click me</button>
$('button')
  .toggleClass('bar')
  .addClass('baz')
  .removeClass('foo')
  .toggleClass('bar');
// <button class="baz bar">Click me</button>
```
Implement the `toggleClass()`, `addClass()` and `removeClass()` methods according to the following specifications. Do not use `Element.classList` and methods to manipulate `DOMTokenList` otherwise the problem becomes quite trivial.

Note: The official jQuery library selects all matched elements and modified all matched elements. However, for this question we can assume there will only be a maximum of one element matching the selector.

`toggleClass(className, state)`
Add or remove one or more classes from the matched element, depending on either the class's presence or the value of the state argument.

**Parameter**	**Type**	**Description**
`className`	`string`	One or more classes (separated by spaces) to be toggled for the matched element.
`state`	`boolean`	An optional boolean value to determine whether the class(es) should be added or removed.
`addClass(className)`
**Parameter**	**Type**	**Description**
`className`	`string`	One or more classes (separated by spaces) to be added to the matched element.
`removeClass(className)`
**Parameter**	**Type**	**Description**
`className`	`string`	One or more classes (separated by spaces) to be removed from the matched element.


# *My Problem-solving Ideas*
1. **Get the element:** Use `document.querySelector(selector)` to get the first element that matches the given selector.

2. **Implement the `toggleClass` method:**

- Process the input `className` string with `trim().split(/\s+/)` to get an array containing all class names.
- *Iterate over each class name in the array:*
  - If the `state` parameter is provided, add or remove the class name based on the value of `state`.
  - If the `state` parameter is not provided, toggle (add or remove) the class name based on whether the element already contains it.

3. **Implement the `addClass` method:**

- Similarly, process the `className` string with `trim().split(/\s+/)` to get an array of class names.
- Iterate over the array, using `element.classList.add(cls)` to add each class name to the element.

4. **Implement the `removeClass` method:**

- Similarly, process the `className` string with `trim().split(/\s+/)` to get an array of class names.
- Iterate over the array, using `element.classList.remove(cls)` to remove each class name from the element.

5. **Chainable calls:** Each method returns `this` after execution, which is the object itself that contains these methods, to support chainable calls.

# *Better problem-solving ideas*

