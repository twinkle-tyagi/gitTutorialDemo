let form = document.getElementById('my-form');
let itemlist = document.getElementById('items');

console.log("hello");

form.addEventListener('submit', addItems);



function addItems(e)
{
    e.preventDefault();

    console.log(1);
    // get input value
    let newItem = document.getElementById('name').value;
    
    //create new li element
    let li = document.createElement('li');
    //add class
    li.className = 'item';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    console.log(li);

    itemlist.appendChild(li);

}