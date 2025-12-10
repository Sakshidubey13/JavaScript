// Write a function that rotates an array by given positions(e.g., 1 → 2 → 3 → 1).

function rotateRight(arr,k){
    let n = arr.length;
    k = k% n;


    let rotatePart = arr.slice(n-k);
    let remainingPart = arr.slice(0,n-k);

    return rotatePart.concat(remainingPart);

}

let arr = [1,2,,3,4,5];
console.log(rotateRight(arr,4));