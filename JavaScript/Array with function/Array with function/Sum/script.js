// 1. Write a function that takes an array and returns the sum of all elements.

       function sumArray(arr){

         let sum = 0;
         for(let i = 0 ; i<arr.length; i++)
         {
            sum = sum + arr[i];
         }
         return sum;
       }
           let array = [1,2,3,4,5];

           console.log("Sum of all elsements in array is : "+ sumArray(array));

