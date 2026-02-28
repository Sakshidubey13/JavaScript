// Declare two variables and find their sum.

let a = 5;
let b = 10;

let sum = a + b;

console.log("The sum of " + a + " and " + b + " is: " + sum);


// Write a program to calculate the area of a rectangle using variables.

let length = 7;
let width = 4;

let area = length * width;

console.log("The area of the ractangle is : " + area);

// Swap two numbers using a third variable.

let x = 3;
let y = 8;

let swap = x;
x = y;
y = swap;

console.log("swapping the value : x = " + x + " and y = " + y);

// Check whether a given number is even or odd using the modulus operator.

let number = 15;

if (number % 2 == 0) {
    console.log("Number is even !")
}
else {
    console.log("Number is odd !");
}

// Convert Celsius to Fahrenheit.

let Celsius = 30;
let Fahrenheit = (Celsius * 9 / 5) + 32;

console.log(Celsius + "°C is equal to " + Fahrenheit + "°F");

// Calculate the simple interest using P, R, T.

let p = 202545; // Principle amount 
let r = 7; // Rate of interest
let t = 10;// Time of years

let simpleInterest = (p * r * t) / 100;

console.log("The simple interest is :" + simpleInterest);

// Find the average of three numbers.

let num1 = 12;
let num2 = 15;
let num3 = 18;

let average = (num1 + num2 + num3) / 3;

console.log("The average of three numbers is : " + average);

// Demonstrate the use of increment (++) and decrement (--) operators.

let count = 8;
console.log("count: " + count);

count++; // Increment
console.log("After increment: " + count);


count--; // Decrement
console.log("After decrement: " + count);




// Find the square and cube of a number using operators.

let number1 = 9;

let square = number1 ** 2;
let cube = number1 ** 3;

console.log("The square of is : " + square);
console.log("THe cube of is : " + cube);




// Compare two numbers and determine which one is greater.

let num = 25;
let numb = 30;

if (num > numb) {
    console.log(num + " is greater than " + numb);

}
else {
    console.log(numb + " is greater than " + num);

}

// Check if a number lies between 10 and 20 using logical operators.

let Number = 25;


if (Number > 10 && Number < 20) {
    console.log(Number + "  Numberb between 10 and 20 ");

}
else {
    console.log(Number + " Number not between 10 and 20 ");

}


// Find the largest of three numbers using ternary operators.

let a1 = 12;
let b1 = 25;
let c1 = 18;

let largest = (a1 > b1) ? ((a1 > c1) ? a1 : c1) : ((b1 > c1) ? b1 : c1);

console.log("The largest number is : " + largest);


// Convert minutes to seconds.

let minutes = 5;

let seconds = minutes * 60;

console.log(minutes + " minutes is equal to " + seconds + " seconds.");


// Calculate the perimeter of a square.

   let side = 6;
   let perimeter = 4 * side;

   console.log("The perimeter of the square is : " + perimeter);

// Find the remainder without using % operator.
 
    let dividend = 35;

    let divisor = 6;

    let reminder = dividend - (Math.floor(dividend/divisor)* divisor );

    console.log("The remainder is : "+ reminder)





// Check if a person is eligible to vote (age ≥ 18).
  
    let age = 20;
    if(age >= 18){
        console.log("Eligible for vote !");
    }
    else{
        sondole.log("Not eligible for vote ! ");
    }



// Calculate the final price after applying a discount percentage.
   
let original = 1500;


let discountPercent = 15;

let discountAmount = (original * discountPercent) / 100;

let finalPrice = original - discountAmount;

console.log("The final price after discount is : " + finalPrice);


// Create a simple calculator performing +, –, ×, /, %.

let numA = 20;
let numB = 5;
console.log("Addition: " + (numA + numB));
console.log("Subtraction: " + (numA - numB));
console.log("Multiplication: " + (numA * numB));
console.log("Division: " + (numA / numB));
console.log("Modulus: " + (numA % numB));

// Check if marks are greater than 33 AND less than or equal to 100.

let marks = 85;

if (marks > 33 && marks <= 100) {   
    console.log("Pass");
}
else {
    console.log("Fail");
}


// Find the power of a number using the exponent operator.

 let cubeNum = 4;
 let power = cubeNum ** 3;

 console.log("The power of " + cubeNum + " to the 3rd is : " + power);
 