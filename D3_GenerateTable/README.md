# *Instruction & Requirements*
Generate a table of numbers given the rows and columns.

**Requirements**

![Table Sample](/D3_GenerateTable/Assets/image.png)
1. The user enters the number of rows and columns in a form.
2. When the form is submitted, a table with the respective number of rows and columns will be generated.
3. The table contains rows x columns cells, each containing a number sequence from 1 to (rows x columns).

# *My Problem-solving Ideas*

**Knowledge Point involved**

When I first encountered this problem, I identified two main knowledge points being tested:

- How to retrieve values entered into HTML elements and use them to render a table of the corresponding size;
- Understanding the indexing rules for table rows and columns and observing that for columns indexed from `0` (thus considering the first column as an `even` column in programming terms), the direction of number insertion alternates between top to bottom and bottom to top, creating a snaking pattern across columns.

**My solution**

1. In solving the problem, I began by using selectors to access the input values in the HTML structure, converting them with parseInt, and verifying their validity.

2. I then devised a function that handles two significant tasks: inserting a dynamically sized table into an empty div in HTML and traversing the columns to fill them in a snaking pattern as observed. This approach emphasizes dynamic rendering based on user input and showcases a flexible web development practice. Finally, by manipulating the DOM, the entire table is dynamically rendered into HTML, allowing for variable table size and fill pattern as determined by user input.

