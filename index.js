

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

console.log(add(1,2));
console.log(subtract(1,2));
console.log(multiply(1,2));
console.log(divide(1,2));