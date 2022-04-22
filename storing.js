localStorage.setItem('name','bob'); //key, value
// if same key it will overrite the value.

console.log(localStorage.getItem('name'));
// value will remain in local storage even if you remove first statement after executing once.
localStorage.removeItem('name'); // remove item

// session storage
sessionStorage.setItem('name','john')
console.log(sessionStorage.getItem('name'))

//cookies are very different from session and local storage
document.cookie = 'name=kyle; expires=' + new Date(2023,1,1).toUTCString(); //expires takes UTC date. it will now expire on 1 jan 2020.

// to add new cookie take new key
document.cookie = 'lastName = Smith; expires=' +new Date(9999,0,1).toUTCString();  // this cookie will never expire as it's last date is too far in future.

console.log(documentcookie); // to see all cookies