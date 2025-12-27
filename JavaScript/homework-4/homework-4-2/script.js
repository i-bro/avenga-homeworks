function validateNumber(num) {
    return typeof num === "number" && !isNaN(num);
}

function sumNumbers(arr) {
    if (arr.length !== 5) {
        return "Error: Array must contain exactly 5 numbers.";
    }

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!validateNumber(arr[i])) {
            return "Error: One or more values are not valid numbers.";
        }
        sum += arr[i];
    }

    return sum;
}

let numbers = [10, 20, 30, 15, 25];

let result = sumNumbers(numbers);
console.log(result);

