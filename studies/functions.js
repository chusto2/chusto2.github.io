/* Functions:

Functions allows us to have reusable blocks of code that run given certain
parameters/arguments. They accept inputs, process those inputs, and then returns
a new data value. We however do not need to give some functions parameters. If we declare
a function and give it several parameters, if we do not call the function with the same number
of arguements, the function will just give the parameters supplied to it a value of 
undefined. There are 4 parts to a function declaration:

1. Name
2. Parameters/Arguments
3. Function body
4. Return Statement
*/

/* 1. Name - just like it sounds like, giving our function a name so that we can call it.
We place it after the function keyword and before the parameters.

   2. Parameters/Arguements - functions will take parameters/arguments when we decide to 
write and run the code. Parameters are placeholders while we build the function. Arguements
are what the code uses as it tests and runs the code. 

   3. Function body - this is the spot where we tell the function what we want it to do
given the parameters/arguments. Inside here we can tell it to use any of the statements,
or even loops, in order to get the desired result we want.

   4. Return statement - this is what we use when we want the new data value returned. 
Return statements are usually used in function bodies. They allow us to get a value out of a
function. By default without a return statement a function will be undefined when called.
*/

function add (num1, num2) {
    var sum = num1 + num2;
    console.log(sum);
    return sum;
}

/* Here we have built a simple function to add 2 numbers together and then return their
sum. But there is one more thing we have to do. This is just the building blocks of the
function. We have defined the name, given it some parameters, and told it what to do with
those parameters. However just this can not give us what we want. We have to call the function
or else it will never run. When we call the function we then put in the arguements we want it
to use/test. Those arguements will go in the place of the parameters, which is why we can think
of the parameters as placeholders. When we call the function the arguments go where the 
parameters are and now we can get the result we want.
*/

add(2,2);   // prints => 4

// We can use any numbers we want to after calling the function and those will be the ones run.

add(3,3);    // prints => 6
add(10,5);    // prints => 15

function sub (num1, num2) {
    var result = num1 - num2;
    console.log(result);
    return result;
}

// Here we built a new function to subtract 2 numbers instead.

sub(2,1);    // prints => 1
sub(10,5);     // prints => 5

/* We can also declare a variable and assign it to a function. This allows us to call the variable
and have it run some code given what we designed the function to do.
*/

var multiply = function (num1,num2) {
    var result = num1 * num2;
    console.log(result);
    return result;
};

multiply(2,2);  // prints => 4
multiply(2,6);  // prints => 12

/* One thing to think about when using functions in scope. Scope is what determines what a function
can see and use. Everything has a scope and it starts in the global scope. When we create a function
we create a new scope. The global scope can be thought of as the parent scope while the new scope 
that was created is the child scope. Parent scopes do not have access to the child scopes, however
the child scope has access to parent scope. This allows us to take variables that are declared in the
parent scope and use them in the child scope. However the global scope can not use variables declared in
the child scope. 
*/

var a = 2;
function add2 (num) {
    var result = a + num;
    console.log(result);
    return result;
}

add2(3);    // prints => 5
add2(10);   // prints => 12

/* We created a new function to add 2 to any number we gave it. Notice that we created var a and the 
function was able to pull the variable a into the function and use the value we gave it. This can be
risky because we can reassign a new value to a and it will change the result of what our add2 function
will give us.
*/

/* So looking at the add2 function we made we were able to pull var a into the function to give us the value
stored there and use it in the function. We are pulling in a value from the parent scope into a child scope.
However the var result we have inside the function, inside the child scope we do not have access to. If we
try to console.log(result) we get back a reference error. It will read that result is not defined. This is 
because it is locked into the child scope and we do not have access to it in the global or parent scope. 
If we want to get access to it we have to put the console.log in the function like I have to make sure we
can test that the function is running the way we want.
*/

/* This leads us into closures. Closures allow us to access a parent scope even after the parent scope has
closed and keep information alive and stored in a spot that is not just accessible from the global scope.
No other way to access the information unless using the function in which the stored data is used. 
Using functions inside of functions is helpful for doing this.
*/

function adding (x) {
    return function (y) {
        return x + y;
    };
}

var add15 = adding(15);
console.log(add15(5));      // prints => 20
console.log(add15(2));      // prints => 17

