// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-chusto2');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */
//console.log(customers); 
var maleCount = function(array) {
    var males = _.filter(array, function(value, index, array) {
        return array[index].gender === 'male';
    });
    return males.length;
};

var femaleCount = function(array) {
    return array.reduce(function(acc, e, i, a) {
        if(e.gender === 'female') {
            acc++;
        }
        //console.log(acc);
        return acc;
    }, 0);
};

var oldestCustomer = function(array) {
    var result = [];
    var highestAge = 0;
    array.filter(function (value, i, array) {
       if(array[i].age > highestAge) {
           result = [];
           highestAge = array[i].age;
           return result.push(array[i].name);
       }
    });
    //console.log(result);
    return result.toString();
};

var youngestCustomer = function(array) {
    var result = [];
    var lowestAge = 100;
    array.filter(function(value, i, array) {
        if(array[i].age < lowestAge) {
            result = [];
            lowestAge = array[i].age;
            return result.push(array[i].name);
        }
    });
    //console.log(result);
    return result.toString();
};

var averageBalance = function(array) {
    var balances = array.reduce(function(prev, curr) {
        return prev.concat(curr.balance);
    }, []);
    var balances2 = _.map(balances, function(value) {
        return value.replace('$', '').replace(',', '');
    });
    var numbers = _.map(balances2, function(value) {
        return parseFloat(value);
    });
    //console.log(numbers);
    var average = numbers.reduce(function(prev, curr){
       return prev += curr;
    }, 0);
    return average/array.length;
    //console.log(copy);
};

var firstLetterCount = function(array, letter) {
    return array.reduce(function(acc, e, i, a) {
        if(e.name.charAt(0).toUpperCase() === letter.toUpperCase()) {
            acc++;
        }
        return acc;
    }, 0);
};

var friendFirstLetterCount = function(array, customer, letter) {
    //console.log(typeof customer);
    //console.log(customers[1].friends);
    var friendList = array.reduce(function(prev, curr) {
        if(curr.name === customer) {
            return curr.friends;
        } else {
            return prev;
        }
    }, []);
    //console.log(friendList);
    return friendList.reduce(function(acc, e, i, a) {
        if(e.name.charAt(0).toUpperCase() === letter.toUpperCase()) {
            acc++;
        }
        return acc;
    }, 0);
    
};

var friendsCount = function(array, name) {
    var friendList = [];
    _.each(array, function(e, i, a) {
        _.each(e.friends, function(customer, i, a) {
            if(customer.name === name) {
                friendList.push(e.name);
            }
        });
    });
    return friendList;
    
    
};

var topThreeTags = function(array) {
    var tags = array.reduce(function(prev, curr) {
        return prev.concat(curr.tags);
    }, []);
    //console.log(tags);
    var count =  tags.reduce(function(acc, curr, i) {
        if(acc[curr]) {
            acc[curr]++;
        } else {
            acc[curr] = 1;
        }
        return acc;
    }, []);
    //console.log(count);
    //console.log(Array.isArray(count));
    var keys = Object.keys(count).sort(function (tag1, tag2) {
        return count[tag2] - count[tag1];
    });
    return keys.slice(0, 3);
};

var genderCount = function(array) {
    var genders = array.reduce(function(prev, curr) {
        return prev.concat(curr.gender);
    }, []);
    //console.log(genders);
    return genders.reduce(function(acc, curr, i) {
        if(acc[curr]) {
            acc[curr]++;
        } else {
            acc[curr] = 1;
        }
        return acc;
    }, {});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
