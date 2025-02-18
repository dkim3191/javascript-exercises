const findTheOldest = function (arr) {
    for (let person of arr) {
        if (person.yearOfDeath == undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
    }
    let oldest = arr[0];
    let oldestAge = arr[0].yearOfDeath - arr[0].yearOfBirth;

    for (let person of arr) {
        if ((person.yearOfDeath - person.yearOfBirth) > oldestAge) {
            oldestAge = person.yearOfDeath - person.yearOfBirth;
            oldest = person;
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

