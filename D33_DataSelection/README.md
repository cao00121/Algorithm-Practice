# *Instruction & Requirements*
A data set of gym sessions looks like this:

```javascript
[
  { user: 8, duration: 50, equipment: ['bench'] },
  { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },
  { user: 1, duration: 10, equipment: ['barbell'] },
  { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
  { user: 7, duration: 200, equipment: ['bike'] },
  { user: 2, duration: 200, equipment: ['treadmill'] },
  { user: 2, duration: 200, equipment: ['bike'] },
];
```javascript
textSearch('This is Uncopyrightable!', ['copy', 'right']);
// 'This is Un<b>copyright</b>able!'
textSearch('This is Uncopyrightable!', ['copy', 'right', 'table']);
// 'This is Un<b>copyrightable</b>!'
```
Each session has the following fields:

`user`: User ID of the session's user.
`duration`: Duration of the session, in minutes.
`equipment`: Array of equipment used during the sessions, in alphabetical order. There are only 5 different equipments.
Implement a method `selectData`, which is used to return sessions from the data. It has the interface `selectData(sessions [, options])`. The options available should include:

`user`: Select only sessions with this id. If not specified, include all users (subject to other filters).
`minDuration`: Select only sessions with duration equal to or greater than this value. If not specified, include all sessions regardless of duration (subject to other filters).
`equipment`: Select only sessions where at least one of the specified equipments were used. If not specified, include all sessions regardless of equipment used (subject to other filters).
`merge`: If set to `true`
Sessions from the same `user` should be merged into one object. When merging:
Sum up the `duration` fields.
Combine all the `equipment` used, de-duplicating the values and sorting alphabetically.
The other filter options should be applied to the merged data.
The order of the results should always remain unchanged from the original set, and in the case of merging user sessions, the row should take the place of the `latest` occurrence of that `user`. The input objects should not be modified.

Examples
The following examples use the data set above:

```javascript
selectData(sessions);
// [
//   { user: 8, duration: 50, equipment: ['bench'] },
//   { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },
//   { user: 1, duration: 10, equipment: ['barbell'] },
//   { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
//   { user: 7, duration: 200, equipment: ['bike'] },
//   { user: 2, duration: 200, equipment: ['treadmill'] },
//   { user: 2, duration: 200, equipment: ['bike'] },
// ];

selectData(sessions, { user: 2 });
// [
//   { user: 2, duration: 200, equipment: ['treadmill'] },
//   { user: 2, duration: 200, equipment: ['bike'] },
// ];

selectData(sessions, { minDuration: 200 });
// [
//   { user: 7, duration: 200, equipment: ['bike'] },
//   { user: 2, duration: 200, equipment: ['treadmill'] },
//   { user: 2, duration: 200, equipment: ['bike'] },
// ];

selectData(sessions, { minDuration: 400 });
// [];

selectData(sessions, { equipment: ['bike', 'dumbbell'] });
// [
//   { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },
//   { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
//   { user: 7, duration: 200, equipment: ['bike'] },
//   { user: 2, duration: 200, equipment: ['bike'] },
// ];

selectData(sessions, { merge: true });
// [
//   { user: 8, duration: 50, equipment: ['bench'] },
//   { user: 1, duration: 10, equipment: ['barbell'] },
//   { user: 7, duration: 450, equipment: ['bike', 'dumbbell', 'kettlebell'] },
//   { user: 2, duration: 400, equipment: ['bike', 'treadmill'] },
// ];

selectData(sessions, { merge: true, minDuration: 400 });
// [
//   { user: 7, duration: 450, equipment: ['bike', 'dumbbell', 'kettlebell'] },
//   { user: 2, duration: 400, equipment: ['bike', 'treadmill'] },
// ];
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

