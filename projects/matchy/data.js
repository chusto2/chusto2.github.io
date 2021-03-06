/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'dog';
animal['name'] = 'Spot';
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'bark';
noises.push('growl');
noises.unshift('whine');
noises[noises.length] = 'beg';
console.log(noises.length);
console.log(noises.length-1);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
noises.push('howl');
console.log(animal);



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *      dot notation and bracket notation
 * 2. What are the different ways of accessing elements on arrays?
 *      bracket notation
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);

var duck = {};
duck.species = 'duck';
duck['name'] = 'Jerome';
duck.noises = [];
duck.noises[0] = 'honk';
duck.noises.push('sneeze');
duck.noises.unshift('quack');
duck.noises.push('woosh');
console.log(duck);
animals.push(duck);

var raptor = {};
raptor.species = 'dinosaur';
raptor['name'] = 'Blue';
raptor.noises = [];
raptor.noises[0] = 'screech';
raptor.noises.push('roar');
console.log(raptor);
animals.push(raptor);

var cat = {};
cat.species = 'cat';
cat['name'] = 'Fluffy';
cat.noises = [];
cat.noises[0] = 'meow';
cat.noises.unshift('purr');
cat.noises.push('hiss');
console.log(cat);
animals.push(cat);

console.log(animals);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Array because we don't need to store values to keys.
var friends = [];
// write a function named getRandom
// use animals as parameter
// return the index of a random element
function getRandom(animals) {
    return Math.floor(Math.random() * animals.length);
}
console.log(getRandom(animals));
friends.push(animals[getRandom(animals)].name);
console.log(friends);
raptor.friends = friends;
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
