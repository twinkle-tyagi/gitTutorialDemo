/*

const butt = document.querySelector('.btn');

butt.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.container').style.background = 'yellow';
    document.querySelector('#my-form').style.background = 'pink';
})

butt.addEventListener('mouseover',(e) => {
    e.preventDefault();
    document.querySelector('.btn').style.background = 'blue';
    document.querySelector('#my-form').style.background = 'yellow';
})

butt.addEventListener('mouseout', function(e){
    e.preventDefault();
    butt.style.background = 'yellow';
    document.querySelector('#my-form').style.background = '#ccc';
});

const myform = document.querySelector('#my-form');
const nam = document.querySelector('#name');
const emails = document.querySelector('#email');
const msgs = document.querySelector('.msg');
const userList = document.querySelector('#users');


myform.addEventListener('click', onClick);

function onClick(e)
{
    e.preventDefault();

    if(nam.value === '' || emails.value === '')
    {
        //alert('fill both');
        msgs.classList.add('error');
        msgs.innerHTML = 'please enter both fields';

        setTimeout(() => msgs.remove(),3000);
    }
    else
    {
        //console.log(`Name is ${nam.value}, email is ${emails.value}`)
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nam.value}, 
        ${emails.value}`));
        userList.appendChild(li);

        // clear fields
        nam.value = '';
        emails.value='';
    }
}

*/