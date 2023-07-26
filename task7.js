const romanToInt = (romanNumeral) => {
  const romanToIntegerMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < romanNumeral.length; i++) {
    const currentNumeral = romanNumeral[i];
    const nextNumeral = romanNumeral[i + 1];

    const currentNumeralValue = romanToIntegerMap[currentNumeral];
    const nextNumeralValue = romanToIntegerMap[nextNumeral];

    if (nextNumeralValue > currentNumeralValue) {
      result += nextNumeralValue - currentNumeralValue;
      i++; 
    } else {
      result += currentNumeralValue;
    }
  }

  return result;
};

console.log(romanToInt("XXI"));
console.log(romanToInt("MCMXCIV"));
