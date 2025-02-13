const removeFromArray = function(array, ...num) {
    let values = Array.from(num);

    for (let i = array.length-1; i >= 0; i--) {
        for (let j = 0; j < values.length; j++) {
            if (array[i] === values[j]) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
