const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value.trim();
        deleteButton.textContent = '❌';

        li.append(deleteButton);

        // Find the appropriate position to insert the new list item alphabetically
        let items = Array.from(list.querySelectorAll('li'));
        let index = items.findIndex(item => item.textContent > li.textContent);
        if (index === -1) {
            list.append(li); // If no item is greater, append at the end
        } else {
            list.insertBefore(li, items[index]); // Insert before the item found
        }

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';
    } else {
        // Provide a message or focus back to the input field if it's blank
        input.focus();
    }
});