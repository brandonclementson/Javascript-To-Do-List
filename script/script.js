var itemField, list, completedList;

itemField = document.querySelector('#item-field');
list = document.querySelector('.to-do-list');

//Add item in input field to to-do list
document.querySelector('#item-field').addEventListener('keydown', function () {
    if (event.keyCode === 13) {
        // Prevent page from reloading
        event.preventDefault();

        //Store value and clear form
        var itemValue = itemField.value;
        itemField.value = ''

        var newItem = document.createElement('li');
        newItem.classList.add('list-item', 'item-incomplete');
        //newItem.classList.add('animated', 'fadeIn');
        var itemDiv = document.createElement('div');
        itemDiv.classList.add('item-div');

        var completeIcon = document.createElement('i');
        completeIcon.classList.add('complete-icon', 'far', 'fa-circle');
        completeIcon.addEventListener('mouseenter', iconHover);
        completeIcon.addEventListener('mouseout', iconHover);
        completeIcon.addEventListener('click', toggleComplete);


        var itemText = document.createElement('p');
        itemText.textContent = itemValue;

        var removeIcon = document.createElement('i');
        removeIcon.classList.add('remove-icon', 'fas', 'fa-trash-alt');
        removeIcon.addEventListener('click', removeFromList);

        // Add elements to DOM
        itemDiv.appendChild(completeIcon);
        itemDiv.appendChild(itemText);
        itemDiv.appendChild(removeIcon);
        newItem.appendChild(itemDiv);

        //Insert item at top of list
        list.insertBefore(newItem, list.childNodes[0]);
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

    // Check if item has been completed
    if (item.classList.contains('item-incomplete')) {

        this.removeEventListener('mouseenter', iconHover);
        this.removeEventListener('mouseout', iconHover);

        this.classList.remove('far', 'fa-circle');
        this.classList.add('fas', 'fa-check-circle');

        parentList.insertBefore(item, parentList.childNodes[parentList.childNodes.length]);

    } else if (item.classList.contains('item-complete')) {

        this.addEventListener('mouseenter', iconHover);
        this.addEventListener('mouseout', iconHover);

        this.classList.remove('fas', 'fa-check-circle');
        this.classList.add('far', 'fa-circle');

        parentList.insertBefore(item, parentList.childNodes[0]);
    }

    item.classList.toggle('item-incomplete');
    item.classList.toggle('item-complete');
}

function iconHover() {
    this.classList.toggle('fa-circle');
    this.classList.toggle('fa-check-circle');
}