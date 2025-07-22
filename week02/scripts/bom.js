/* const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value;

    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
    deleteButton.addEventListener('click', () => {
      list.removeChild(li);
    });

    li.append(deleteButton);
    list.append(li);

    input.value = '';
    input.focus();
  }
}); */


// Get references to DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add click event listener to the Add Chapter button
button.addEventListener('click', function () {
  // Trim whitespace and check if input is not empty
  if (input.value.trim() !== '') {
    // Create new list item and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Set text for list item and delete button
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

    // Add delete functionality
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    // Add button to list item, and list item to list
    li.append(deleteButton);
    list.append(li);

    // Clear input field
    input.value = '';
  }

  // Set focus back to input field regardless
  input.focus();
});
