'use script';

var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');


// Form submit event
form.addEventListener('submit',addItem);

// Delete event
itemlist.addEventListener('click',removeItem);

// filter event
filter.addEventListener('keyup',filterItem);

// Declaring the addItem function
function addItem(e){
    e.preventDefault();

    // get the input value
    var newitem = document.getElementById('item').value;
    // Create new li element to list
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = newitem;

    // Adding button tag to the added element
    var button = document.createElement('button');
    button.className = 'btn btn-danger btn-sm float-right delete';
    button.textContent = 'X';
    li.appendChild(button);

    // Adding the new item to the dom
    itemlist.appendChild(li);
    console.log(li);
}

// Declaring the function removeItem
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}

// Declaring the filterItem function
function filterItem(e){
    // convert to the lowercase
    var text = e.target.value.toLowerCase();

    // Get list of li
    var items = itemlist.getElementsByTagName('li');
    console.log(items);
    // Convert the above html collection to the array, why because in js somethings can't be done by html collections
    Array.from(items).forEach((item)=>{
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
    console.log(text);
}