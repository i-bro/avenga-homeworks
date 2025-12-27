function maxMinSum(arr) {
    let numbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            numbers.push(arr[i]);
        }
    }

    if(numbers.length === 0){
        return "No valid numbers in the array";
    }

    let max = numbers[0];
    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max){
            max = numbers[i];
        }
        if (numbers[i] < min){
            min = numbers[i];
        }
    }

    let sum = max + min;
    return `Max: ${max}, Min: ${min}, Sum: ${sum}`;

}

let arr = [3, 5, "hello", 6, true, 8, 11, 35];

let result = maxMinSum(arr);
console.log(result);