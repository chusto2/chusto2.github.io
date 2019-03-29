/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
* We can also use the keywords, let, and , const, to declare a variable. These are not the same as
* var. 
*
* Let - allows us to assign a value to it like with var. These are useful when we are writing
code in functions, or are in certain code blocks. That is because they are not hoisted out of a
scope. Let is very similar to var besides the fact that var is hoisted to the top of its scope.
*/
let myCat = 'panic';
console.log(myCat); // prints => panic

// The let keyword can also be reassigned like with var.
myCat = 'flare';
console.log(myCat); //prints => flare

/* Similarly we can assign values to const. We would assign something to const when we do not 
want that value to change. Const like let is not hoisted into another scope or the top of the
scope that it is in.
*/
const color = 'grey';
console.log(color); // prints => grey

// The const keyword however can not be reassigned once it has be declared and defined.

// color = 'blue';
// console.log(color); // prints => type error: assignment to constant variable

/* Var also has a special property that it does not share with let and const.
* This property is called hoisting. Hoisting allows a variable to be declared at some point in our
* code and pulled up to the top to be assigned. Var will be hoisted to the top of the scope in a 
function. This can be helpful but sometimes we might not want our variables to be hoisted from
where we declare them.
*/

console.log(num); //prints => undefined
var num = 10;
/* Why does it not print 10? Only the declaration of the variable is hoisted, it does not get 
assigned until after console.log
*/

// This can not be used with let or const they will stay where they are and not be hoisted up to the top.

/*
This brings us to scopes. Scopes are where a certain part of code lives. There are several scopes
into which we put data and where it can be accessed from. The global scope is the base scope where
everything is initially. When we write a function we are creating a new scope. Inside that scope
we can have more variables that can only be accessed in that scope. Similarly when we have conditonal
statements they create their own scopes as well. Loops also have their own scopes. One thing to think 
about with scopes is that variables in the outer scopes can be accessed by the inner scopes. One way
to remember this is as parent and child scopes. The global scope would be the parent scope and a
function scope would be a child scope. Similarly any additional scopes inside of another scope are 
children to the scope that it is inside. Parent scopes do not have access to their children scopes
however child scopes have access to the parent scope.
*/

var global = 22;
function child (x) {
    let a = 50;
    console.log(global);    // => prints 22, the child has access to its parent here.
    console.log(a);         // => prints 50, can call it because were accessing it in its scope.
}
console.log(global);    // => prints 22
//console.log(a);         // => we get a error here it says a is not defined because in the global
                        // scope we have no variable a