# *Instruction & Requirements*
In browsers, we are able to find specific words or phrases within a webpage by using Ctrl + F (Windows, Linux) or ⌘ + F (Mac) and entering the search term. Matches which appear will be highlighted in yellow.

Let's implement a simple version of a browser's in-webpage search with the difference being we're given a string (as opposed to HTML) and search matches appear **bolded**.

Given a string and an array of queries, implement a function textSearch that finds all case-insensitive matches from the queries array within the string, wrapping the matches in `<b>...</b>` tags.

```javascript
textSearch('The Quick Brown Fox Jumps Over The Lazy Dog', ['fox']);
// 'The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog'
textSearch('The quick brown fox jumps over the lazy dog', ['fox', 'dog']);
// 'The quick brown <b>fox</b> jumps over the lazy <b>dog</b>'
```
If two such queries overlap or are consecutive, they should be wrapped in a single pair of <b> tags.

```javascript
textSearch('This is Uncopyrightable!', ['copy', 'right']);
// 'This is Un<b>copyright</b>able!'
textSearch('This is Uncopyrightable!', ['copy', 'right', 'table']);
// 'This is Un<b>copyrightable</b>!'
```
A character will not match the same query more than once, with earlier letters taking priority.

```javascript
textSearch('aaa', ['aa']);
// '<b>aa</b>a'
// This is because the second character cannot be used as a match again.
textSearch('aaaa', ['aa']);
// '<b>aaaa</b>'
```

# *My Problem-solving Ideas*

- **Preprocess Inputs:**

Check if the input text is an empty string. If it is, return the original text immediately, as there's nothing to match or highlight.
For each query, also check if it's an empty string. Empty queries should not be involved in the matching process.

- **Initialize Marking Array:**

Create an array, `boldChars`, of the same length as the text, to mark which characters need to be highlighted. Initially, all elements are set to 0 (indicating no highlighting needed).

- **Find Matches and Mark:**

Iterate through each query and, for each query, iterate through the text to find matching substrings.
Use substring comparison (converting both text and query to lowercase for case-insensitive matching) to determine matches. Once a match is found, set the corresponding positions in the `boldChars` array to 1, indicating these characters need highlighting.
After finding a match, update the index `i` to skip over the matched substring to avoid repeated matching. This is done by setting `i` to the end of the matched substring.

- **Construct Highlighted String:**

Based on the markings in `boldChars`, iterate through each character of the text and decide whether to add `<b>` and `</b>` tags before and after characters, depending on whether they need to be highlighted.
Pay special attention to ensure that consecutive highlighted characters are wrapped in a single pair of `<b>` and `</b>` tags. This can be determined by checking the current character's highlight state and the highlight state of its adjacent characters.

- **Handle Edge Cases:**

Ensure that tags are correctly added or not added at the start and end of the string. If the string starts with a highlighted character, add `<b>` immediately; if it ends with a highlighted character, append `</b>` at the end.

# *Better problem-solving ideas*

