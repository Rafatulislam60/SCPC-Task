const findSecondSmallest = (arr) => {
  if (arr.length < 2) {
    return "Enter at least two elements.";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num != smallest) {
      secondSmallest = num;
    }
  }

  if (secondSmallest === Infinity) {
    return "Error: There is no second smallest element in the array.";
  }

  return secondSmallest;
};

console.log(findSecondSmallest([7, 6, 8, 5, 2, 3]));
