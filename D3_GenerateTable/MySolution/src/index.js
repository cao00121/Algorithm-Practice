// Use the Selector to get the button element.
const submitButton = document.getElementById('submit');

// Use the Selector to get the table container div.
const tableContainer = document.getElementById('tableContainer');


// Add event listener to the submit button and get the user input number of rows and columns.
submitButton.addEventListener('click', function(e) {
     e.preventDefault();


     const rows = parseInt(document.getElementById('rows').value);
     const columns = parseInt(document.getElementById('columns').value);

     // Input value detection, if it's valid, then call the fillTableCells function.
     if (rows > 0 && columns > 0) {
          const table = fillTableCells(rows, columns);
          tableContainer.innerHTML = '';
          tableContainer.appendChild(table);
     }
});

/**
 * Creates a table with the specified number of rows and columns, and fills the table cells with numbers in a specific pattern.
 * 
 * @param {number} rows - The number of rows in the table.
 * @param {number} columns - The number of columns in the table.
 * @returns {HTMLTableElement} - The generated table element.
 */
function fillTableCells(rows, columns) {
     // Create the table element
     const table = document.createElement('table');
     // Initialize the number that insert into the table cell from 1.
     let number = 1;

     // retrieve the rows num and render the rows of the table.
     for (let row = 0; row < rows; row++) {
          const tr = document.createElement('tr');
          table.appendChild(tr);

          // Inside the for loop, contains another for loop that retrieve the columns num and render the columns of the table.
          for (let col = 0; col < columns; col++) {
               const cell = document.createElement('td');
               // Insert the column into the certain row.
               tr.appendChild(cell);
          }
     }

     // retrieve all the columns and insert the value into the cell based on its odd/even column.
     // There's one thing to be clarified that in table, the row and column starts from 0, which means the table's first row/column number is even.
     for (let col = 0; col < columns; col++) {
          // Determine whether the current column is an odd column or an even column
          // If it's an even column, then insert table cells from top to the bottom
          if (col % 2 === 0) { 
               for (let row = 0; row < rows; row++) {
                    table.rows[row].cells[col].textContent = number++;
               }
          } else {  // Else, insert the table cells from bottom to the top.
               for (let row = rows - 1; row >= 0; row--) {
                    table.rows[row].cells[col].textContent = number++;
               }
          }
     }

     return table;
}
