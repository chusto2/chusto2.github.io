/* String Manipulation:

String manipulation is a way for us to acces and use parts of strings or even add strings together.
We can add multiple strings together like addition. More so we can take out just the parts we need
from strings. If we have saved data as a string such as a name, we can capitalize all the letters
with string manipulation, or just the first letter. We can take out a single word from a sentence.
This allows us to change a string for it we are looking for a certain value, but we are checking
for that value in a string and it is almost the same but just not quite.
*/

var a = 'mufc';
var b = 'soccer';
console.log(a + b);     // prints => mufcsoccer
// We added the two strings together but it put them together without a space.

console.log(a + ' ' + b);       // prints => mufc soccer
// Notice we added a space between the 2 variables and it gave us the space we want between them.

/* We can do more to strings than just adding 2 strings together. Strings also have a .length
property like arrays. This allows us to see how many characters we have in a string. This also
allows us to call individual characters as well.
*/

console.log(a.length);   // prints => 4
console.log(a[0]);           // prints => m

// We can also use .slice to take out certain characters that we want. This is helpful with sentences.

var c = 'mufc Red Devils';
console.log(c.slice(5));       // prints => Red Devils

// There are several other properties that we can use .toUpperCase and .toLowerCase change the string

console.log(c.toUpperCase());     // prints => MUFC RED DEVILS
console.log(c.toLowerCase());     // prints => mufc red devils

// We can also copy certain parts of a string to return just the parts we want.
console.log(c.substring(0, 4));     // prints => mufc
console.log(c.substring(0, 8));     // prints => mufc Red


// We can combine several to get new strings with the results we want.
console.log(c.toUpperCase().substring(5, c.length));    // prints => RED DEVILS
// Here we want just Red Devils but we also wanted it to all be capped.

/* We can also use .trim to get rid of white space, like spaces. Can be used if accidently added 
a space into the string.
*/

var soccer = '   mufc are the best     ';
console.log(soccer.trim());         // prints => mufc are the best
console.log(soccer);            // prints =>      mufc are the best     
// Its hard to see in this example but just soccer still prints out with all the added spaces

/* We can also take a string and return its parts back as an array. We do this by using the .split
property. We split var c at the spaces and so just got back the words we put into the string and
it is returned as a array of strings.
*/
console.log(c.split(' '));      // prints => ['mufc', 'Red', 'Devils']


/* Sometimes we need to change a string. We can use the .replace property to take out what we do not
want and replace it with what we want it to read.
*/
var sent = 'mufc is the worst';
console.log(sent);          // prints => mufc is the worst
// This is definitely not true so let's change that
console.log(sent.replace('worst', 'best'));         // prints => mufc is the best
// There now that is right, we told it to take out 'worst' and replace it with 'best'

console.log(sent);      // prints => mufc is the worst
// Notice that even though we replaced the word when we log it again the string has not changed

sent = sent.replace('worst', 'best');
console.log(sent);
/* Here we reassigned the var sent to be how we wanted it with the .replace property. Now the var
sent will print out what we want it to really say.
*/

/*
Some of the methods we use on strings are pure methods. This means that they give a certain 
output everytime. However this also means that they do not change the data they are used on.
They give us what we need at the time but keeps the value in the data unchanged meaning we 
still have the original data we saved. Earlier when we used .toUpperCase(), and .toLowerCase(),
they printed out what we needed at the time but they did not change the value we used these
methods on. If we console.log the same string we use one of these methods on after the string
will not have changed.
*/

var team = 'Manchester United';
team.toUpperCase(); // Would give us 'MANCHESTER UNITED'
team.toLowerCase(); // Would give us 'manchester united'
console.log(team); // would return the original string => 'Manchester United'
// These give us a greater flexibility in our code without changing the data we have.