/* 
Datatypes:

There are several datatypes that we use while coding. There is also a breakdown between datatypes
into two different types: Simple and Complex.

Simple:
1. Number
2. String
3. Boolean
4. NaN
5. Undefined
6. Null

Complex:
1. Array
2. Object
3. Function
*/

// Simple
/* 1. Number - numbers are numeric data, they are assigned to a variable and can be called 
if we want that number returned. Can be positive, negative, or with a decimal point.
*/

var num = 6;
console.log(num); // prints => 6

// Numbers can be used like in math for arithmatic as well

console.log(num + 2); // prints => 8

/* 2. String - strings are a group of characters surrounded within quotes, either " " or ' '.
We can put any characters together but primarily this lets us add words into our code. Names
or sentences can be called if we assign them to a variable.
*/

var nameFirst = 'Chris';
console.log(nameFirst); // prints => 'Chris'

// Strings can be added together too. 

var sentence = ' likes cats';

console.log(nameFirst + sentence); // prints => 'Chris likes cats'

// We can access individual characters in a string by using bracket notation.

console.log(nameFirst[0]); // prints => 'C'

// Strings also have a property .length, this is what allows us to call a specific character.
console.log(nameFirst.length); // prints => 5

/* This can be a little confusing we called the first letter in nameFirst by using [0] but
.length is telling us there are 5 characters. This is because strings are zero indexed. 
Meaning the first character starts at 0 and, in this example, goes to 4.
*/


/* 3. Boolean - booleans are values that return either true or false. We use booleans to 
evaluate things we want to see if they are true or false and can do some action depending
on the result. Used in functions with if/else statements we can tell the program to return
something or continue running until we get a different answer, true becomes false. Can be 
thought of as an on/off switch and are generally used in conditional statements. But they
can also be used in boolean expressions using comparison operators.
*/

console.log(6 > 9); // prints => false
console.log(6 < 9); // prints => true

// Booleans will always print out in lowercase!

/* 4. NaN - stands for Not a Number. This means that the value is not a number just like 
it suggests. Can use this to tell if a value of a variable is a legal number or not.
*/

/* 5. Undefined - undefined means that there is nothing assigned to that variable. It has
no value, or nothing has been assigned to it yet.
*/

var cat;
console.log(cat); // prints => undefined
cat = 'Panic';
console.log(cat); // prints => 'Panic'

/* The first time we assign cat we do not add any data to the variable, we just named it.
This shows when we try to print it with console.log(). After that we take the name of the variable
and give it a string 'Panic'. So the second time we call cat in the console.log() it prints out
the string 'Panic'.
*/

/* 6. Null - null shows a lack of identification. Nothing has been defined and shows us that 
we are pointing to nothing.
*/


// Complex
/* 1. Array - arrays are lists of data. Arrays are identified by [], and can include numbers, strings,
booleans, arrays, objects, and even functions. Like strings they have a .length property and are zero
indexed.
*/

var myArr = [];
console.log(myArr); // prints => []

// We defined myArr and gave it an empty array.
myArr = [1,2,3,4,5];
console.log(myArr); // prints => [1,2,3,4,5]
// Here we reassigned myArr to a new array containing the numbers 1-5

var myArr2 = [1,'true',3,4,['cat','dog',6]];
console.log(myArr2); // prints => [1,'true',3,5,['cat','dog',6]]
// This time we assigned not only numbers but also strings and another array to myArr2

// Just like with strings .length returns the number of elements inside an array.
console.log(myArr.length); // prints => 5

// Just like with strings we can call individual parts of an array with bracket notation.
console.log(myArr[2]); // prints => 3
console.log(myArr2[4]); // prints => ['cat','dog',6]


/* 2. Object - objects are like arrays in that they are complex data types used to store data.
However objects are different in a couple different ways. The first and most obvious difference
is that we use {} to identify them. Just like with arrays, we can put strings, numbers, booleans,
arrays, objects, and functions inside an object. However unlike arrays, objects store data at keys
instead of indices. They are key/value pairs. We call data out of a object by calling its key
and we get the data associated with that key.
*/

var myObj = {};
console.log(myObj); // prints => {}

myObj = {
    key1: 'alpha',
    key2: 'beta',
    key3: 92
};
console.log(myObj) // prints => {key1: 'alpha', key2: 'beta', key3: 92}
// Here we reassigned the variable myObj to a new object

// So how can we call specific parts of the object just created?
// We call the specific key.

console.log(myObj.key1); // prints => alpha
console.log(myObj['key2']); // prints => beta
// We can call objects with dot notation and bracket notation.

// Objects do not have a .length property 

/* 3. Function - functions are reusable blocks of code that accepts inputs, processes those inputs,
and then returns a new data value. In order to declare a function there are four parts; name,
parameters/arguments, function body (where the code runs), and a return statement. So what is the
difference with parameters and arguments? Parameters are placeholders for arguments while we are
building the function. We place them in there to be replaced by the arguments we want the function
to use. Return statements in functions are optional. However return statements can only be used
in function bodys. Return statements do like you think and return something from a function, usually
a new value.
*/

// Preparing a function by designing what it will do.
function sum (a, b) {
    return a + b;
}

// Now that we have the design with parameters we can call the function and give it arguments

console.log(sum(1,2)); // prints => 3
/* Calling the function with arguments places the arguments in the spots of the parameters.
By calling the function we have the function run the code inside the function body, inside the
{}. This then returns some new data with the return statement.
*/
 
/* There is one other datatype, Infinity/-Infinity. This is very much like it sounds of being
infinity. Just like infinity if you try to add 1 to infinity it will give you back infinity. Same
if you try to multiply a number into infinity. 
*/

/* The difference between Simple and Complex data types is that simple data has a finite amount 
of data. If you do an operation to a simple data type it will return a new simple data value. 
Complex data types can be of any size. Arrays and objects can have any number of values they are
not limited to the amount of bytes of memory that simple datatypes are. Functions can be 
however long as they need to be.
*/ 

/* That is not the only differences though. Simple data types are copy by value while complex
data types are copy by reference. When you call a simple data type, it is calling a copy of the
data or value itself. While complex data types are calling a reference of the data or value
stored in them. 
*/

var a = 15;
var b = a;
console.log(b); // prints => 15
b = 30;
console.log(a); // prints => 15
console.log(b); // prints => 30
/* When b is assigned it is equaled to a so its taking the value stored into a which is why
it prints out 15. When we reassign it a new number, 30, when we call the variable b again it
prints out 30, while when we call a it prints out 15. This is because we never changed a, but
when we reassigned b to a new value it no longer equals a.
*/

/* When we do the same with a complex data type it will reference the same information and so
when changing one it will change both.
*/

var c = {key1: 'apple',
         key2: 'bannana',
         key3: 'carrot'
};
var d = c;
console.log(d); // prints => {key1: 'apple', key2: 'bannana', key3: 'carrot'}
d.key1 = 'alpha';
console.log(c); // prints => {key1: 'alpha', key2: 'bannana', key3: 'carrot'}

// When we change the key1 in d, it changes the key1 in c as well.

