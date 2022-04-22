let form = document.getElementById('my-form');
form.addEventListener('submit', (e)=>
{
    e.preventDefault();
    let name1 = document.getElementById('name').value; //get name
    let email1 = document.getElementById('email').value; // get email
    localStorage.setItem(name1,email1); //store in local storage as key value pair
});