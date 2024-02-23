function findArithmeticMean(array) {
    var sum = 0;
    var count = array.length;

    for (var i = 0; i < count; i++) {
        sum += array[i];
    }

    return sum / count;
}

var inputArray = [2, -78, 45, 4, -7, -6, -10, 26, 30, 8, 9, 5, 3, -14, 8, -9, 13];
var result = findArithmeticMean(inputArray);
console.log("Среднее арифметическое число:", result);

function sumOfSquaresOfEvens(numbers) {
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
        var number = numbers[i];

        if (number % 2 === 0) {
            sum += Math.pow(number, 2);
        }
    }

    return sum;
}

var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result1 = sumOfSquaresOfEvens(numberArray);
console.log("Сумма квадратов четных чисел:", result1);

function isPrime(number) {
    if (number <= 1) {
        console.log(false);
        return;
    }

    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            console.log(false);
            return;
        }
    }

    console.log(true);
}
isPrime(7);
isPrime(12);
isPrime(29);



const numbers = [10, 15, 20, 25, 30];
let average = 0;

for (let i = 0; i < numbers.length; i++) {
    average += numbers[i];
}

average = average / numbers.length;
console.log("Среднее значение в массиве:", average);