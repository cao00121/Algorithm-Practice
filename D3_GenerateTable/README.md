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

# *Better problem-solving ideas*

- **Dynamically Creating Tables:** Utilizes `Array.from` and template literals to dynamically generate the HTML structure of the table.

- **Declarative Programming:** Employs a declarative programming approach, directly generating views based on data, instead of stepwise DOM manipulation.

- **Calculating Fill Values:** Uses a conditional expression to calculate the fill value for each cell based on the evenness or oddness of the column.

- **Concise Code:** Concatenates HTML strings in a succinct manner through chaining `.map` and `.join` methods.

**Aspects that I lacked or didn't consider**
- **Declarative Programming:** The solution elegantly demonstrates how to simplify the problem-solving process through declarative programming. Compared to step-by-step addition or modification of DOM elements, this method is more concise and intuitive.

- **Dynamic Array Creation with `Array.from`:** It cleverly uses the `Array.from` method to create arrays of specific lengths and initialize their elements, which is particularly useful in scenarios of dynamic content generation.

- **Flexible Use of Conditional Expressions:** In calculating the fill values for cells, it employs conditional expressions to decide the values based on the column's evenness or oddness, making the method both succinct and efficient.