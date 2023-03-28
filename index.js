let number;
let operator;
let anotherNumber;

const add = function(...numbers) {
	const total = numbers.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  });
  return total;
};

const subtract = function(...numbers) {
	const total = numbers.reduce(function (previousValue, currentValue) {
    return previousValue - currentValue;
  });
  return total;
};

const multiply = function(...numbers) {
    const total = numbers.reduce(function (previousValue, currentValue) {
      return previousValue * currentValue;
    });
    return total;
  };

const divide = function(...numbers) {
    const total = numbers.reduce(function (previousValue, currentValue) {
        return previousValue / currentValue;
      });
      return total;
}

const operate = function(number, anotherNumber, operator) {
    if (operator === '+') {
         return add(number, anotherNumber);
    } else if (operator === '-') {
        return subtract(number, anotherNumber);
    } else if (operator === '*') {
        return multiply(number, anotherNumber);
    } else if (operator === '/') {
        return divide(number, anotherNumber);
    }
};

