const sumAll = function(x, y) {
    if (x < 0 || y < 0
        || !Number.isInteger(x) || !Number.isInteger(y)) {
        return 'ERROR';
    }

    if (x > y) {
        let temp = x;
        x = y;
        y = temp;
    }

    let sum = 0;
    for (let i = x; i <= y; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
