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

/* let li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'glass';
li[2].style.backgroundColor = "yellow";

li[0].style.fontWeight = 'bold';


for(let i =0;i<li.length;i++)
{
    li[i].style.fontWeight = 'bold';
} */

// Query Selector

/* let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 3px #ccc';

let input = document.querySelector('input');
input.value = 'Hello world';

var submit = document.querySelector('input[type = "submit"]');
submit.value = "SEND";

var item = document.querySelector('.item');
item.style.color = 'red';

let last = document.querySelector('.item:last-child');
last.style.color = 'blue';

let second = document.querySelector('.item:nth-child(2)');
second.style.color = 'green'; */

// Query Selector All

/*
let titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = "hello";

let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');


for(let i =0;i<odd.length;i++)
{
    odd[i].style.backgroundColor = 'green';
    //even[i].style.backgroundColor = 'red';
}

let lis = document.querySelectorAll('li');
lis[2].style.display = "none";
*/

let itemList = document.querySelector('.items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'red';
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = 'red';
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);

// console.log(itemList.childNodes); // not recommended as it also show whitespaces.
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'yellow';

//console.log(itemList.firstChild);  // gives us white-spaces as first child
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'Hello';

//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = "Hello last";

// console.log(itemList.nextSibling);  // text node, white-spaces
// console.log(itemList.nextElementSibling);

//console.log(itemList.previousSibling);
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'green';

let newDiv = document.createElement('div'); //create new div element
newDiv.className = 'hello1';
newDiv.id = 'hello1';
newDiv.setAttribute('title','Hello Div'); // to set attribute (what attribute you want, its value)

// to add content to div, create new text node, then append it to div
let newDivText = document.createTextNode('hEllo');
newDiv.appendChild(newDivText); //add text to div

//newDiv is still in JS and not in HTML file, to insert it there we need 
// to find where to insert and insert it there.

//document.querySelector(main where we have to insert, div/form/section inside main);
let container = document.querySelector('section #my-form');

// querySelector(main, section/form/div in main);
let h1 = document.querySelector('section h1');
container.insertBefore(newDiv, h1); //(what we inserting, what we inserting before)
console.log(newDiv);

newDiv.style.fontSize = '10px';

// adding hEllo before item1 in li.
let newitem = document.createElement('li');
newitem.className = 'item';
newitem.appendChild(document.createTextNode('hEllo'));

let newli = document.querySelector('ul .item');
// (position to insert, what to insert);
newli.insertAdjacentElement('beforebegin', newitem);


