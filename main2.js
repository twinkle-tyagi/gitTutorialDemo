let form = document.getElementById('my-form');
let itemlist = document.getElementById('items');
let filter = document.getElementById('filter');

form.addEventListener('submit', addItems);

// delete event
itemlist.addEventListener('click',removeitem);
// filter event
filter.addEventListener('keyup',filterItems);

function addItems(e)
{
    e.preventDefault();

    // get input value
    let newItem = document.getElementById('name').value;
    
    //create new li element
    let li = document.createElement('li');
    //add class
    li.className = 'item';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create button
    let delBtn = document.createElement('button');
    // add classes to button
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('X'));
    li.appendChild(delBtn);

    itemlist.appendChild(li);

}

function removeitem(e) // to delete list item
{
    // if target conatins class name delete
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure?')) // to confirm delete, pop-up box
        {
            let lis = e.target.parentElement; // we are clicking on button, so to remove list item we have to get it's parent item
            itemlist.removeChild(lis); // to remove li from child list of ul.
        }
    }
}
/*
function filterItems(e) //filter method
{
    //convert to lower case to match
    let text = e.target.value.toLowerCase();
    //get all the li in items list
    let items = itemlist.getElementsByTagName('li');
} 
*/