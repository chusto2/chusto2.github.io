/* Control flow:

Control flow is using conditonal statements to determine if we should run a certain
block of code or not. Using conditional statements takes an expression that we want
to know if it is true to execute the code block. Using these expressions we can return
a boolean value which will tell us if the arguments in the expression exist or are true
or false. We can use a couple different types of condtional statements:

1. If/else if/else statements
2. Switch statements
*/

/* 1. If/else if/else statements - allows us to run a certain code block depending
on if the arguments are determined to be true. If they are false we skip the code in
the if statement and move on to the next statement. The if statements take the expression
given it to determine if it is true, or exists. The following statement after the
if is else if. If that one proves to be true it's code block will run otherwise it will
go onto the next statement looking for the right code to run. The final statement will 
be an else statement. This can be thought of as the default code to run if none of the
other statements turn out to return a boolean value of true. You can have several
conditions that can be true in a if statement but once we get true on one of them none
of the others would run as the code in the first one that turns out to be true will
run and the others will not. This makes it extremely important to plan out these statements
and what the code blocks you want run given the condition you are looking for.
*/

if (6 > 5) {
    console.log('yes it is');       // prints => 'yes it is'
}

if (6 > 9) {
    console.log('yes');
} else {
    console.log('no it is not');
}

// prints => 'no it is not'

if (6 > 9) {
    console.log('yes');
} else if (5 > 7) {
    console.log('you got it');
} else if (3 > 2) {
    console.log('now your right');
} else {
    console.log('I guess not');
}

// prints => 'now your right'

/* 2. Switch statements - these are similar to the if statements in that they put out a 
certain result based on if a condition is met or true. These are also very useful if you
want a couple different cases to read the same result. Switch statements are better if 
we just want to print something particular based on the value given. Rather if/else statements
can do similar but they are used more as a series of checks. This means if we are just looking
at a particular value it can be easier to just have a switch statement so that if the value
given is one of those we know what will be printed without it having to run through tests to 
find the right truthy value.
*/

var color = 'red';
switch (color) {
    case 'blue':
        console.log('is this right');
        break;
    case 'green':
        console.log('maybe');
        break;
    case 'red':
        console.log('red is best');
        break;
}
// prints => 'red is best'

switch (color) {
    case 'blue':
    case 'green':
        console.log('could be better');
        break;
    case 'red':
    case 'white':
        console.log('both are good');
        break;
}
// prints => 'both are good'
