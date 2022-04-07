//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.head);
//console.log(document.all);
//document.all[10].textContent = "hello";
//console.log(document.forms);
//console.log(document.links);
//console.log(document.forms[0]);
//console.log(document.images);

// Get ELEMENT by ID

//console.log(document.getElementById('header'));
//let heade = document.getElementById('header');
//let header1 = document.getElementById('main-header');
//console.log(heade);
//heade.textContent = 'Hello';
//heade.innerText = 'Nice Guy';
//console.log(heade.innerText);
//console.log(heade.textContent);
//heade.innerHTML = '<h3> nice man</h3>';
//header1.style.borderBottom = 'solid 3px #000';

let addItem = document.getElementById('add-user');
addItem.style.color = 'green';
addItem.style.fontWeight = 'bold';

// Get ELEMENTS by CLASS NAME

/* let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'glass';
items[2].style.backgroundColor = "yellow";

items[0].style.fontWeight = 'bold';


for(let i =0;i<items.length;i++)
{
    items[i].style.fontWeight = 'bold';
}
*/

//get ELEMENTS by Tag Name

let li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'glass';
li[2].style.backgroundColor = "yellow";

li[0].style.fontWeight = 'bold';


for(let i =0;i<li.length;i++)
{
    li[i].style.fontWeight = 'bold';
}