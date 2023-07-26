const findMostFrequentElement = (arr) => {
  const frequencyCounter = {};
  let maxFrequency = 0;
  let mostFrequencyElement;

  for (let num of arr) {
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
    if (frequencyCounter[num] > maxFrequency) {
      maxFrequency = frequencyCounter[num];
      mostFrequencyElement = num;
    }
  }
  return mostFrequencyElement;
};

console.log(findMostFrequentElement([5, 5, 3, 4, 6, 5]));
