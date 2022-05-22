// to count number of times button is clicked we can use global variable count
/*
let count = 0;

let butt = document.getElementById('clickme');
butt.addEventListener("click",()=> {
    console.log("button clicked", ++count); // will count no of times clicked
});
*/
// not a good practice to use global variable.
// we will use closures.

// closures.

function eventListener()
{
    let count = 0;
    let butt = document.getElementById('clickme');
    butt.addEventListener("click",()=> { // this callback funtion will form closure with count 
        console.log("button clicked", ++count); // will count no of times clicked
    });
}
eventListener();



