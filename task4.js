const findTwoNumbersWithSum = (arr, target) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j< arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return "No numbers found with given sum"
}

console.log(findTwoNumbersWithSum([1,5,9,14,19],6));