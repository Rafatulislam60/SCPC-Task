const sumOfPositiveNumbers = (arr) => {
  let sum = 0;

  for (let num of arr) {
    if (num > 0) {
      sum += num;
    }
  }
  return sum;
};

console.log(sumOfPositiveNumbers([2, -5, 10, 7, -9]));
