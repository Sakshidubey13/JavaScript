// 2. Write a function that takes an array and returns the maximum element.

    function maxArray(arr){
        let max = arr[0];
        for(let i = 1; i<arr.length ; i++){
            if(arr[i]> max){
                max = arr[i];

            }
        }
        return max;

    }
       let array = [142,26354,223,76,99987,3456];

       console.log("Maximum element in array is : "+ maxArray(array));