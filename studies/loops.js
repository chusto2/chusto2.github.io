/* Loops:

There are a few different types of loops. Loops allow us to run a block of code
several times instead of just once. If we give a function an array as a parameter,
we can then loop through the entire array to use each value in the array. Loops
can also be used with objects in functions as parameters as well. We can use this so
we have one parameter with a lot of data. The three different types of loops are:
1. While loops
2. For loops
3. For in loops

1. While loops - allows us to run code several times until it reaches a set stop point.
Have to be very careful to not only tell it when to stop but also add a counter. If not
the loop could run an infinite amount of times and crash the program. Can be useful if 
we do not know the number of times we need a loop to run. For instance using a for loop,
we can know that we are only looping until we reach the end of an array. While loops allow
us to keep looping until we get what we need out of it.
*/

var count = 0;
while (count < 3) {
    console.log(count); // prints => 0 1 2
    count ++;
}

/* 2. For loops - allows us to run code several times until reaching a set stop point, just like
with while loops. For loops have 3 different parts to creating them. After initilizing it with
the for keyword, we must set where the loop will start, where it will end, and how many the
count will increase or decrease by.
*/

for (let i = 0; i < 4; i++) {
    console.log(i);              // prints => 0 1 2 3
}

// Can also count in reverse for both while and for loops.

for (let i = 4; i > 0; i--) {
    console.log(i);             // prints => 4 3 2 1
}

// Can also select how much we want to count by.

for (let i = 0; i <= 10; i += 2) {
    console.log(i);                 // prints => 0 2 4 6 8 10
}

// When counting by more than one make sure to set i to not only add to but to save the new number.

/* 3. For in loops - used for looping in an object. This allows us to pull out data from some or
all of the key/value pairs. 
*/

var myObj = {
    key1: 'Panic',
    key2: 'mufc',
    key3: 'pjs'
};

for (var key in myObj) {
    console.log(key);           // prints => key1 key2 key3
    console.log(myObj[key]);    // prints => Panic mufc pjs
}

/* While for in loops are used exclusively for objects, we can also loop through arrays using
the for loop. 
*/

var myArr = [1,2,3,4,5];
for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);             // prints => 1 2 3 4 5
}
// We used the .length property to loop through the whole array.

for (let i = myArr.length-1; i >= 0; i--) {
    console.log(myArr[i]);              // prints => 5 4 3 2 1
}
