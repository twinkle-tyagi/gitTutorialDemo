let form = document.getElementById('my-form');
form.addEventListener('submit', (e)=>
{
    e.preventDefault();
    let name1 = document.getElementById('name').value;
    let email1 = document.getElementById('email').value;
    localStorage.setItem(name1,email1);
});