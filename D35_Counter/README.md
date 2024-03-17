# *Instruction & Requirements*
This is a short question which only requires one state variable, which is the number of times the button has been clicked (`count`). Attach a '`click`' event listener to the `<button>` and each time it is clicked, increment the `count` value and update the text with that value.

Since only the count needs to change, we can use a `<span>` to target the count text and update its `textContent` whenever a click event is fired.

**Example**
The example below is shown with indentation to make the output easier to understand.

```javascript
const doc = new DOMParser().parseFromString(
  `<!DOCTYPE html>
  <body>
    <h1>Heading1</h1>
    <h2>Heading2a</h2>
    <h2>Heading2b</h2>
    <h3>Heading3a</h3>
    <h3>Heading3b</h3>
    <h4>Heading4</h4>
    <h2>Heading2c</h2>
  </body>`,
  'text/html',
);

const htmlString = tableOfContents(doc);
console.log(htmlString);
// Pretty-printed for readability.
`<ul>
  <li>
    Heading1
    <ul>
      <li>Heading2a</li>
      <li>
        Heading2b
        <ul>
          <li>Heading3a</li>
          <li>
            Heading3b
            <ul>
              <li>Heading4</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Heading2c</li>
    </ul>
  </li>
</ul>`;
```

# *My Problem-solving Ideas*


# *Better problem-solving ideas*

