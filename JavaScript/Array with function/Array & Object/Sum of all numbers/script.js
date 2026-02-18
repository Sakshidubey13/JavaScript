//  Find the sum of all numbers in an array Input: [10, 20, 30, 40] ✅ Expected Output: 100

const arr = [10, 20, 30, 40];

function sum(array) {
    return array.reduce((total, num) => total + num, 0);
}

console.log(sum(arr));
