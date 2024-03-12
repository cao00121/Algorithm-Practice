# *Instruction & Requirements*
`getElementsByClassName()` is a method which exists on HTML `Document`s and `Element`s to return an `HTMLCollection` of descendant elements within the `Document`/`Element` which has the specified class name(s).

Let's implement our own `Element.getElementsByClassName()` that is similar but slightly different:

It is a pure function which takes in an element and a `classNames` string, a string containing one or more class names to match on, separated by whitespace.
Like `Element.getElementsByClassName()`, only descendants of the specified element are searched, not the element itself.
Return an array of `Element`s, instead of an `HTMLCollection` of `Element`s.

```javascript
const doc = new DOMParser().parseFromString(
  `<div class="foo bar baz">
    <span class="bar baz">Span</span>
    <p class="foo baz">Paragraph</p>
    <div class="foo bar"></div>
  </div>`,
  'text/html',
);

getElementsByClassName(doc.body, 'foo bar');
// [div.foo.bar.baz, div.foo.bar] <-- This is an array of elements.
```

# *My Problem-solving Ideas*

- Split the classNames string into an array containing all class names.

- Initialize an empty result array to store the matching elements.

- Define a traverse function to recursively traverse the DOM tree.

- In the traverse function, check if each element's class list contains all the specified class names.

- If an element matches, add it to the result array.

- Start traversal from the child nodes of the given element to avoid including the root element itself in the results.

- Return the result array containing all matching elements.

# *Better problem-solving ideas*

