const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', function () //upon clicking the button, the following below are executed
{
    const inputValue = input.value.trim(); //this will remove excess white spaces in the text to qualify for ths if block below

    if (inputValue !== '') {
        const li = document.createElement('li'); //add the input value to the list
        list.append(li);
        li.textContent = inputValue;

        const deleteButton = document.createElement('button'); //adds a delete button along with the list
        li.append(deleteButton);
        deleteButton.textContent = '❌';


        deleteButton.addEventListener('click', function () // Delete li as use clics the deletebutton
        {
            list.removeChild(li);
        });

        input.value = ''; // Clear input field after adding item
    }
});
