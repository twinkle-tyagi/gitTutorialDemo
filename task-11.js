const myForm = document.getElementById('my-form');

// initialize FormData constructor with myform
const formData = new FormData(myForm);

// object.formentries converts entries from formData to object
const obj = Object.fromEntries(formData.entries());
console.log(obj);