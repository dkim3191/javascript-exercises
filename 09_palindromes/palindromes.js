const palindromes = function (string) {
    string = string.toLowerCase();
    string = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    string = string.split(" ").join("");
    len = string.length;
    for (let i = 0; i < Math.trunc(len/2); i++) {
        if (string.charAt(i) == string.charAt(len-1-i)) {
            continue;
        } else {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
