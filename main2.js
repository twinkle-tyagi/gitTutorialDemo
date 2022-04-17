let form = document.getElementById('my-form');
let itemlist = document.getElementById('items');

form.addEventListener('submit', addItem1);

function addItem1(e)
{
    e.preventDefault();

    console.log(1);
}