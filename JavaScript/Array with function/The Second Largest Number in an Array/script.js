// Write a function that takes an array and returns the second largest number.

function secondLargest(arr){
    let largest = -Infinity;
    let second = -Infinity;

    for(let num of arr){
        if(num > largest){
            second = largest;
            largest = num;

        }
        else if(num > second && num < largest)
        {
            second = num;

        }
    }
    return second;

}

let arr = [13,54,58,35,9,8,3,2];
console.log(secondLargest(arr));
