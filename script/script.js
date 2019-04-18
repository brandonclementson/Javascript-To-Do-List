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
        newToDo.classList.add('animated', 'fadeIn');

        var buttons = document.createElement('div');
        buttons.classList.add('list-div');

        var completeItem = document.createElement('i');
        completeItem.classList.add('complete-item', 'far', 'fa-circle');
        completeItem.addEventListener('mouseenter', iconHover);
        completeItem.addEventListener('mouseout', iconHover);
        completeItem.addEventListener('click', toggleComplete);


        var item = document.createElement('p');
        item.textContent = itemValue;

        var removeItem = document.createElement('i');
        removeItem.classList.add('remove-item', 'fas', 'fa-trash-alt');
        removeItem.addEventListener('click', removeFromList);

        // Add elements to DOM
        buttons.appendChild(completeItem);
        buttons.appendChild(item);
        buttons.appendChild(removeItem);
        newToDo.appendChild(buttons);

        //Insert item at top of list
        list.insertBefore(newToDo, list.childNodes[0]);
    }
});

function removeFromList() {
    var item = this.parentNode.parentNode;
    var parentList = item.parentNode;
    parentList.removeChild(item);
}

function toggleComplete() {
    var item = this.parentNode.parentNode;
    var parentList = item.parentNode;

    parentList.removeChild(item);

    // Check if item is in to-do list and move to completed
    if (parentList.classList.contains('to-do-list')) {

        this.classList.remove('far', 'fa-circle', 'fa-check-circle');
        this.classList.add('fas', 'fa-check-circle');

        completedList.insertBefore(item, completedList.childNodes[0]);

    } else if (parentList.classList.contains('completed-list')) {

        this.classList.remove('fas', 'fa-check-circle');
        this.classList.add('far', 'fa-circle');

        list.insertBefore(item, list.childNodes[0]);
    }
}

function iconHover() {
    if (this.classList.contains('fa-circle')) {
        this.classList.remove('fa-circle');
        this.classList.add('fa-check-circle');
    } else if (this.classList.contains('fa-check-circle')) {
        this.classList.remove('fa-check-circle');
        this.classList.add('fa-circle');

    }
}