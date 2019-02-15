// Assignment
const form = document.querySelector(".input-wrap")
const input = document.getElementById('input-item');
const addingButton = document.querySelector('.add-btn');
const toDoList = document.getElementById('list');
const switchButton = document.querySelector('.switch-btn');
const clearButton = document.querySelector('.clear-btn');
let items = [];


// Focus on input
input.focus();

// Adding a task by putting value in the input and pressing the button
// Saving the add-task event function in a variable;
const eventFunction = () => {
    let trim = input.value.trim();

    if (trim) {
        addNewItem(trim);
    }
    const keyValue = { itemText: trim, isDone: false };
    items.push(keyValue);
    localStorage.setItem('items', JSON.stringify(items));
}

function addNewItem(itemText, isDone) {
    let buttonDone = document.createElement('button');
    let buttonDelete = document.createElement('button');
    let listItem = document.createElement('li');
    let addListItem = toDoList.appendChild(listItem);
    addListItem.classList.add('li-task_visible');
    addListItem.innerHTML = itemText;

    if (isDone) {
        addListItem.classList.add('task-done');
    }

    // Positioning of the list items
    addListItem.style = 'position: relative';

    // Adding a done-button to a list-item
    const addTickButton = addListItem.appendChild(buttonDone);
    addTickButton.innerHTML;
    buttonDone.classList.add('li-task_button-done');

    // Adding a delete-button to a list-item
    const addCrossButton = addListItem.appendChild(buttonDelete);
    addCrossButton.innerHTML;
    buttonDelete.classList.add('li-task_button-delete');

};

itemsString = localStorage.getItem('items');
if (itemsString) {
    items = JSON.parse(itemsString)
    items.forEach(item => {
        addNewItem(item.itemText, item.isDone)
    });
}
// if (dataStored) {
//     items[keyValue] = JSON.parse(dataStored);
//     for (let itemText in items[keyValue]) {
//         if (items[keyValue].hasOwnProperty(itemText)) {
//             addNewItem(itemText, items[keyValue].itemText);
//         }
//     }
// };

// Adding a clear-button event
clearButton.addEventListener('click', () => {
    localStorage.clear();
    while (toDoList.firstChild) {
        toDoList.removeChild(toDoList.firstChild);
    }
    items = {};
});

// Add-button click
addingButton.addEventListener('click', eventFunction);

input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        eventFunction();
    }
})

// DELEGATION
toDoList.addEventListener('click', ({
    target
}) => {
    // Click on the done-button
    if (target.classList.contains('li-task_button-done')) {
        target.parentElement.classList.toggle('task-done');
        let itemText = target.parentElement.textContent;
        item = items.filter((element) => element.itemText === itemText)[0];
        item.isDone = !item.isDone
        localStorage.setItem('items', JSON.stringify(items));
    }

    // Click on the delete-button
    if (target.classList.contains('li-task_button-delete')) {
        target.parentElement.classList.toggle('remove');
    }
});


input.focus();

let showDone = false;

// Switch button
// Hiding the tasks done
switchButton.addEventListener('click', () => {
    const elementsToToggle = document.getElementsByClassName('task-done');

    for (let i = 0; i < elementsToToggle.length; i++) {
        if (showDone) {
            elementsToToggle[i].classList.remove('remove');
        } else {
            elementsToToggle[i].classList.add('remove');
        }
    }
    showDone = !showDone;
})