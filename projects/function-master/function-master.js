//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
   var arr = [];
   for (var key in object) {
       arr.push(object[key]);
   }
   console.log(arr);
   return arr;
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
       return Object.keys(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function valuesToString(object) {
   // take object values
   // test with typeof
   // if value = string take value and add to string with space
   // if value != string get rid of it
  console.log(object);
  var arr = [];
   for (var key in object) {
       if (typeof object[key] === 'string') {
           arr.push(object[key]);
           console.log(arr);
       }
   } return arr.join(' ');
}



//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
   if (Array.isArray(collection)){
       return 'array';

   } else {
   return "object";
   }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
   var newString = string[0].toUpperCase() + string.substring(1);
   return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var newString = string.split(' ');
    var myArray = [];
    for (var i  =0; i < newString.length; i++) {
       myArray.push(newString[i][0].toUpperCase() + newString[i].substring(1));
    }
   return myArray.join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var str = 'Welcome ' + capitalizeWord(object.name) + '!';
    console.log(str);
    return str;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var str = capitalizeWord(object.name) + ' is a ' + capitalizeWord(object.species);
    console.log(str);
    return str;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (arrayOrObject(object.noises) === 'array' && object.noises.length > 1) {
        return object.noises.join(' ');
    }  else {
        return 'there are no noises';
    }
}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    return string.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (arrayOrObject(object.friends) === 'array' && object.friends.includes(name)) {
        return true;
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    console.log(array);
    var result = [];
    var nameObject;
    for (let i = 0; i < array.length; i++) {
        if(name === array[i].name) {
            nameObject = array[i];
        } 
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i].name !== name) {
            if (!isFriend(array[i].name, nameObject)) {
                result.push(array[i].name);
            }
        }
    }
    return result;
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    if((key in object)) {
        object[key] = value;
    } else {
        object[key] = value;
    }
    console.log(object);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    var newArr = Object.keys(object);
    var keyArr = [];
    console.log(newArr);
    for (let i = 0; i < array.length; i++) {
        if (newArr.includes(array[i])) {
            keyArr.push(array[i]);
        }
    }
    for (let i = 0; i < keyArr.length; i++) {
        delete object[keyArr[i]];
    }
    console.log(keyArr);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}