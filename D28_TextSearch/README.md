# *Instruction & Requirements*
In browsers, we are able to find specific words or phrases within a webpage by using Ctrl + F (Windows, Linux) or ⌘ + F (Mac) and entering the search term. Matches which appear will be highlighted in yellow.

Let's implement a simple version of a browser's in-webpage search with the difference being we're given a string (as opposed to HTML) and search matches appear **bolded**.

Given a content string and a query string, implement a function `textSearch` that finds all case-insensitive matches with the query string, wrapping the matches in `<b>...</b>` tags.



```javascript
textSearch('The Quick Brown Fox Jumps Over The Lazy Dog', 'fox');
// 'The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog'
textSearch('The hardworking Dog overtakes the lazy dog', 'dog');
// 'The hardworking <b>Dog</b> overtakes the lazy <b>dog</b>'
```

A character will not match the same query more than once, with letters appearing earlier taking priority.

```javascript
textSearch('aaa', 'aa');
// '<b>aa</b>a'
// This is because the second character cannot be used as a match again.
```
Consecutive matches should be combined into a single `<b>` tag.

```javascript
textSearch('aaaa', 'aa');
// Correct: '<b>aaaa</b>'
// Wrong: '<b>aa</b><b>aa</b>'
```

# *My Problem-solving Ideas*

- **Check for Empty Query:** The function first checks if the query string (`query`) is empty. If it is, there are no contents to match, so it directly returns the original text (`text`).

- **Escape Special Characters in Query String:** The query string may contain special characters, such as `.` or `*`, which have special meanings in regular expressions. To ensure these characters are treated as ordinary characters, we use the replace function with a regular expression to escape them.

- **Create Regular Expression:** Next, we use `new RegExp` to create a regular expression object. This regular expression will match one or more consecutive occurrences of the query string (because we used the `+` quantifier). The `gi` flags are used for global and case-insensitive matching.

- **Replace Matched Text:** Finally, we use the `replace` function with the regular expression to find all matching content and wrap them with `<b>...</b>` tags. The callback function receives each match and returns the bolded match.


# *Better problem-solving ideas*

