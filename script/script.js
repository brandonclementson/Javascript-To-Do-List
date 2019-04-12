var itemField, list, completedList;

itemField = document.querySelector('.add-to-list');
list = document.querySelector('.to-do-list');
completedList = document.querySelector('.completed-list');

//Add item in input field to to-do list
document.querySelector('.add-to-list').addEventListener('keydown', function () {
    if (event.keyCode === 13) {

        // Prevent page from reloading
        event.preventDefault();

        //Store value and clear form
        var itemValue = itemField.value;
        itemField.value = ''


        var newToDo = document.createElement('li');
        newToDo.classList.add('list-item');

        var buttons = document.createElement('div');
        buttons.classList.add('list-div');

        var completeItem = document.createElement('input');
        completeItem.type = 'image'
        completeItem.src = 'img/bx-circle.svg';
        completeItem.classList.add('complete-item');
        completeItem.addEventListener('click', toggleComplete);


        var item = document.createElement('p');
        item.textContent = itemValue;

        var removeItem = document.createElement('input');
        removeItem.type = 'image'
        removeItem.src = 'img/bxs-trash.svg';
        removeItem.classList.add('remove-item');
        removeItem.addEventListener('click', removeFromList);

        buttons.appendChild(completeItem);
        buttons.appendChild(item)
        buttons.appendChild(removeItem);
        newToDo.appendChild(buttons);

        //Insert item at top of list
        list.insertBefore(newToDo, list.childNodes[0]);
    }
});

function removeFromList() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    parent.removeChild(item);
}

function toggleComplete() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;

    parent.removeChild(item);

    if (parent.classList.contains('to-do-list')) {
        completedList.insertBefore(item, completedList.childNodes[0]);
    } else if (parent.classList.contains('completed-list')) {
        list.insertBefore(item, list.childNodes[0]);
    }
}