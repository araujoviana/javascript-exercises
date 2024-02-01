const findTheOldest = function(people) {

    let currentYear = new Date().getFullYear();
    people.sort((a, b) => ((typeof a.yearOfDeath === "undefined" ? currentYear : a.yearOfDeath) - a.yearOfBirth) - ((typeof b.yearOfDeath === "undefined" ? currentYear : b.yearOfDeath) - b.yearOfBirth));
    return people.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
