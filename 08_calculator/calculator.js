const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  for (const i of arr) {
    sum += i;
  }
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  for (const i of arr) {
    product *= i;
  }
  return product;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
	if (a == 0) return 1;
  let product = 1;
  for (let i = 1; i <= a; i++) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
