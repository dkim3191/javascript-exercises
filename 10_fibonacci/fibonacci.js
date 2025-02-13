const fibonacci = function(x) {
    x = +x;
    if (x < 0) return "OOPS";
    if (x == 0) return 0;

    let a = 1;
    let b = 1;
    let c = a + b;
    for (let i = 0; i < x-1; i++) {
        a = b;
        b = c;
        c = a + b;
    }
    return a;
};

/*
1 1 2 -- initial
1 2 3 -- x = 1
2 3 5
3 5 8
5 8 13
*/

// Do not edit below this line
module.exports = fibonacci;
