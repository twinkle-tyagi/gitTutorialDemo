//function statement - normal function decleration
//difference between function statement and expression is hoisting.

/*
x(); // it(function statement) will return "hello".
ex(); // it(function expression) will return error as it is treated as variable.

function x()
{
    console.log("hello");
}

//function expression - assigning value of function to a variable.

var ex = function()
{
    console.log("hello");
}

*/

// function decleration - same as function statement

// Anonymous function - function without any name
/*
function ()
{
    console.log("hello");
}
*/

// Named function expression - function expression with named function.

var ex = function x()
{
    console.log("hello");
    console.log(x); // will return function statement. because x is available in this scope.
}
ex(); //will give "hello"
x(); // will give referenceError. because when we declare function x it is not created in global scope. if you try to access x inside x you can do it, but not outside x.

// difference between parameter and arguments

function xy(param1, param2) // inside function decleration is called parameters.
{
    console.log("hello");
}
xy(1, 2); // inside function call is called arguments

// FIRST CLASS FUNCTION - JS functions are first class function. Also called FIRST CLASS CITIZENS

// first class functions are the functions that can be used as values, can be passes as arguments to another function and can be returned from another function.

// 1.
var a1 = function () // used as varibale
{

}
// 2.
var a2 = function xyz (param1)
{

}
xyz(function ()   // function passed as argument.
{

});
// 3.
var a3 = function ()
{
    return function ()    // function returned from another function
    {
        console.log("hello");
    }
}

//Arrow function