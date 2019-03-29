/*
Operators:

There are several operators that are used while coding. Operators are used
to act on our data. 
The operators we use are differentiated by a couple of types:
1. Assignment Operators
2. Arithmetic Operators
3. Comparison Operators
4. Logical Operators
5. Unary Operators
6. Ternary Operator
*/

/* 1. Assignment Operators - assign a value on its right operand to it's left operand.
The most basic assignment operator is the = sign. It allows us to assign a variable
to a value.
*/

var a = 1;
console.log(a); // prints => 1
// Here we assigned the value of 1 to the variable a.

/* There are other operators that do extra than just assign a value to the operand.
By using another operator with the = sign we can not only assign the operand but do
something else to it as well.
*/

// For instance if we use += we can add and reassign the operand a new value.

a += 1; 
console.log(a); // now prints => 2 instead of 1
/* The variable a was 1 but using the addition operator allows us to add 1 and reassign
the value of a to the product, in this case 1 + 1 or 2.
*/
// Can also use this method to subtract, multiply, and divide as well.

/* 2. Arithmetic Operators - these allow us to do math. Allows us to add, subtract, multiply,
and divide. These also follow the order of operations like in mathmatics.
*/

var b = 2;
console.log(a + b); // prints => 4
// Taking a from before were adding a to b.

var c = 6;
console.log (c - a); //prints => 4
// Again taking a from before were subtracting that from c.

/* 3. Comparison Operators - used to compare different values to each other. Some of the ones
used are === (strictly equalled to) as well as == (kind of equalled to). We use strictly equal
when we are looking for exactly that value. Using the other one makes it so that it performs
a conversion on what we are comparing. For instance the number 1 and the string '1' we can tell
if they are similar or equal using (==). There are also other comparsion operators that help us
determine the differences between values are the greater than (>), less than (<), as well as 
greater than or equal to (>=), and less than or equal to (<=). We also have is not equal to 
(!==). These operators return us boolean values of true or false and let us determine if we
should execute code based on the result.
*/

var d = 1;
var e = 1;
var f = 3;
console.log(d === e); // prints => true
console.log(d > f); // prints => false
console.log(d < e); // prints => false
console.log(d <= e); // prints => true

/* 4. Logical Operators - these are similar to comparison operators but they add a little bit
extra to the comparison operators. These operators include the logical and (&&), the logical or
(||), as well as the bang operator (!). The bang operator turns the comparison or assignment 
operator around so it is looking for not that value. For instance if using !=, it will return 
true instead of false if the values are different. These operators are again useful when trying
to determine whether the code should execute or not.
*/

var g = 5;
var z = 5;
var y = 10;
console.log(g === z && g === y); // prints => false
// This is because it is asking if g = z AND g = y.
// They both need to return true for it to print out true.

console.log(g === z || g === y); // prints => true
// This is because g is = z, even though g is not = y.
// Using this operator requires at least one of them to be true.

/* 5. Unary Operators - these help us to add or subtract numbers from another value. One way is 
to add increments to a number like we did early with arithmetic. Often they are used when you want
to increase or decrease a number. These are shown as (++) add 1 to the value, and (--) subtract one
number from the value. Often these are used with loops. In loops it allows us to increase the 
loop to the next number or reduce it to the next number. Unary operators are similiar but different
to arithmatic operators. They work on only one operand, where arithmetic need atleast two operands
to work and give us a new value. When using loops it is easier to use an unary operator than arithmetic
as using arithmetic would cause us to take a variable and add one to it and set the new number
back to the operator.
*/

for (let i = 0; i <= 2; i++) {}
// i would count up from 0 by 1 until it is equaled to 2 and run the code until it hits that point.

/* 6. Ternary Operator - similar to a conditonal operator. This operator takes 3 operands, and is
similar to an if/else statement. It is like shorthand instead of using the statement you use the operator
if you want to print something depending on whether something is true or not. The operator is used by 
putting the first operand in the ? followed by what you want if it is true followed by a : then what you
want if it is false.
*/
var ab = 2;
var cd = 2;
console.log(ab === cd ? 'yes it is' : 'no it is not'); // prints => 'yes it is'
console.log(ab !== cd ? 'yes it is' : 'no it is not'); // prints => 'no it is not'
// This operator evaluates the first operand to determine what to return.

/*
Using operators we can change values as well. Using assignment operators we can reassign some values
even if they are in complex datatypes. In objects we can reassign a key to have no value, or that is
reassign the value to undefined. This is useful if we need to take something out of an object, but 
not totally destroy the object itself. Using this also saves the key in case we need to reuse it
to store new data that might be more correct or relevant to what were storing.
*/