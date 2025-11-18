// Wap to create a function to find sum of 1 to  n .




// declare of function sum
function sum(n){

    let total = 0;
    for(let i=1; i<=n; i++){
        total = total + i;
    }
    return total;

}

// function call

console.log(sum(5)); // Output: 15
console.log(sum(10)); // Output: 55 
console.log(sum(100)); // Output: 5050