// WAP to check if a user is eligible for vote (age ≥ 18).
let age = 20;

if (age >= 18) {
    console.log("Eligible for vote");
}
else {
    console.log("Not eligible for vote");
}




// WAP to check whether a number is even or odd.

let number = 7;
if (number % 2 == 0) {
    console.log("Even number !");

}
else {
    console.log("Odd number ! ");
}


// WAP to check whether a number is divisible by 7 or not.

let num = 14;
if (num % 7 == 0) {
    console.log("Divisible by 7 ");
}
else {
    console.log("Not divisible by 7 ");
}

// WAP to check whether a given year is leap year or not.
let year = 2020;

if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    console.log("Leap year");
}
else {
    console.log("Not a leap year ");
}

// WAP to check a number is positive, negative or neutral.
let n = -2677;

if (n > 0) {
    console.log("Positive number ");
}
else if (n < 0) {
    console.log("Negative number ");

}
else {
    console.log("Neutral number ");
}

// WAP to find maximum between two numbers.

let a = 45;
let b = 263;

if (a > b) {
    console.log("A is maximum ");
}
else {
    console.log("b is maximum ");
}
// WAP to find minimum between four numbers using nested if-else.
let p = 145;
let q = 14554;
let r = 67;
let s = 9454;

if (p < q) {
    if (p < r) {

        if (p < s) {
            console.log("P is minimum ");
        }
        else {
            console.log("s is minimum ");
        }
    }
    else {
        console.log("r is minimum ");
    }
}
else {
    if (q < r) {

        if (q < s) {
            console.log("q is minimum ");
        }
        else {
            console.log("s is minimum ");
        }
    }
    else {
        if (r < s) {
            console.log("r is minimum ");
        }
        else {
            console.log("S is minimum");

        }
    }


}
// WAP to find maximum between three numbers using ladder if-else.

let x = 345;
let y = 678;
let z = 123;

if (x > y && x > z) {
    console.log("X is maximum");

}
else if (y > x && y > z) {
    console.log("Y is maximum");
}
else {
    console.log(" z is maixmum");
}
// WAP to calculate electricity bill based on unit slabs.
let units = 350;
let bill = 0;
if (units <= 100) {
    bill = units * 5;
}
else if (units <= 200) {
    bill = (100 * 5) + (units - 100) * 7;
}
else {
    bill = (100 * 5) + (100 * 7) + (units - 200) * 10;
}
console.log("Electricity bill is: " + bill);

// WAP to calculate student grade using percentage of 5 subjects.

let math = 76;
let science = 54;
let english = 89;
let hindi = 98;
let gujarati = 70;

let totalMarks = math + science + english + hindi + gujarati;
let percentage = (totalMarks / 500) * 100;
let grade = '';
if (percentage >= 90) {
    grade = 'A+';
}
else if (percentage >= 80) {
    grade = 'A';
}
else if (percentage >= 70) {
    grade = 'B+';
}
else if (percentage >= 60) {
    grade = 'B';
}
else if (percentage >= 50) {
    grade = 'C';
}
else {
    grade = 'F';
}
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);

// WAP to print weekday name by day number (1–7).

let dayNumber = 4;

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");

        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:

        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}
// WAP to print month name by first letter (J, F, M…).

let monthLetter = 'J';
switch (monthLetter) {
    case 'J':
        console.log("January, June, July");
        break;
    case 'F':
        console.log("February");
        break;
    case 'M':
        console.log("March, May");
        break;
    case 'A':
        console.log("April, August");
        break;
    case 'S':
        console.log("September");
        break;
    case 'O':
        console.log("October");
        break;
    case 'N':
        console.log("November");
        break;
    case 'D':
        console.log("December");
        break;
    default:
        console.log("Invalid month letter");
}

// WAP to check MCQ answer (A/B/C/D) using switch.
let answer = 'a';

switch (answer) {
    case 'A', 'a':
        console.log("Correct answer");
        break;
    case 'B', 'b':
    case 'C', 'c':
    case 'D', 'd':
        console.log("Wrong answer");
        break;
    default:
        console.log("Invalid option");
}

// WAP to print numbers 1 to n using while loop, do…while loop, for loop.
let n1 = 15;


console.log("Using while loop : ");
let i = 1;
while (i <= n1) {
    console.log(i);
    i++;

}

console.log("Using do while loop:")
let j = 1;
do {
    console.log(j);
    j++;

} while (j <= n1);


console.log("Using for loop :");
for (let k = 1; k <= n1; k++) {
    console.log(k);
}





// WAP to print numbers n to 1 using while loop, do…while loop, for loop.

let n2 = 10;

console.log("Using while loop : ");
while (n2 >= 1) {
    console.log(n2);
    n2--;
}

console.log("Using do while loop : ");

let m = 10;
do {
    console.log(m);
    m--;
} while (m >= 1)

console.log("Using for loop : ");

for (let p = 10; p >= 1; p--) {
    console.log(p)
}


// WAP to print only even numbers from 1 to n using while loop, do…while loop, for loop.
let even = 20;

console.log("Using while loop : ");
let e = 2;

while (e <= even) {
    console.log(e);
    e = e + 2;

}

console.log("Using do while loop : ")

let f = 2;

do {
    console.log(f);

    f = f + 2;
} while (f <= even);


console.log("Using for loop ");
for (let g = 2; g <= even; g = g + 2) {
    console.log(g);
}


// WAP to print only odd numbers from n to 1 using while loop, do…while loop, for loop.

let odd = 31;
console.log("Using while loop : ");
let o = 1;
while (odd >= o) {
    console.log(odd);
    odd = odd - 2;
}

console.log("Using do while loop : ");
let q1 = 29;
do {
    console.log(q1);
    q1 = q1 - 2;
} while (q1 >= 1);

console.log("Using for loop : ");
for (let r1 = 17; r1 >= 1; r1 = r1 - 2) {
    console.log(r1);
}


// WAP to print all leap years between a start and end year using while loop, do…while loop, for loop.
let startYear = 2000;
let endYear = 3000;

console.log("Using while loop : ");
let sy = startYear;
while (sy <= endYear) {
    if ((sy % 4 == 0 && sy % 100 != 0)) {
        console.log(sy);
    }
    sy++;
}

console.log("Using do while loop : ");

let dy = startYear;
do {
    if ((dy % 4 == 0 && dy % 100 != 0)) {
        console.log(dy);
    }
    dy++;
} while (dy <= endYear);

console.log("Using for loop : ");
for (let fy = startYear; fy <= endYear; fy++) {
    if ((fy % 4 == 0 && fy % 100 != 0)) {
        console.log(fy);
    }
}

// WAP to print the sum of numbers from 1 to n using while loop, do…while loop, for loop.
let sum = 10;
let total = 0;

console.log("Using while loop : ");
let s1 = 1;

while (s1 <= sum) {
    total = total + s1;
    s1++;
    console.log(total);

}

console.log("Using do while loop ");
let s2 = 1;
total = 0;
do {
    total = total + s2;
    s2++;
    console.log(total);
} while (s2 <= sum);

console.log("Using for loop : ");
total = 0;
for (let s3 = 1; s3 <= sum; s3++) {
    total = total + s3;
    console.log(total);
}

// WAP to print multiplication table of any number using while loop, do…while loop, for loop.

let tableNum = 19;
console.log("Using while loop : ");
let t1 = 1;
while (t1 <= 10) {
    console.log(tableNum + " x " + t1 + " = " + (tableNum * t1));
    t1++;
}

console.log("Using do while loop : ");
let t2 = 1;
do {
    console.log(tableNum + " x " + t2 + " = " + (tableNum * t2));
    t2++;
} while (t2 <= 10);

console.log("Using for loop : ");
for (let t3 = 1; t3 <= 10; t3++) {
    console.log(tableNum + " x " + t3 + " = " + (tableNum * t3));
}

// WAP to print logical sequence: 1, 3, 5, 7, 9… using while loop, do…while loop, for loop.
let limit = 20;

console.log("Using while loop :")
let g = 1;
while (g <= limit) {
    console.log(g);
    g = g + 2;

}
console.log("Using do while loop : ");
let h = 1;
do {
    console.log(h);
    h = h + 2;

} while (h <= limit);

console.log("Using for loop : ");
for (let i = 1; i <= limit; i = i + 2) {
    console.log(i);
}







// WAP to print sequence: 1, 11, 111, 1111… using while loop, do…while loop, for loop.
let terms = 8;


console.log("Using while loop : ");

let num1 = 0;
let count = 1;

while (count <= terms) {
    num1 = num1 * 10 + 1;
    console.log(num1);
    count++;

}

console.log("Using do while loop : ");

let num2 = 0;
let count2 = 1;
do {
    num2 = num2 * 10 + 1;
    console.log(num2);
    count2++;
} while (count2 <= terms);

console.log("Using for loop : ");
for (let count3 = 1, num3 = 0; count3 <= terms; count3++) {
    num3 = num3 * 10 + 1;
    console.log(num3);
}



// WAP to print Fibonacci sequence using while loop, do…while loop, for loop.
let FibonacciTerm = 10;
console.log("Using while loop : ");
let A = 0, B = 1;
let countFibo = 1;
while (countFibo <= FibonacciTerm) {
    console.log(A);
    let nextTerm = A + B;
    A = B;
    B = nextTerm;
    countFibo++;
}

console.log("Using do while loop : ");
let c = 0, d = 1;
let countFibo2 = 1;
do {
    console.log(c);
    let nextTerm2 = c + d;
    c = d;
    d = nextTerm2;
    countFibo2++;
} while (countFibo2 <= FibonacciTerm);

console.log("Using for loop : ");
let E = 0, F = 1;

for (let countFibo3 = 1; countFibo3 <= FibonacciTerm; countFibo3++) {
    console.log(E);
    let nextTerm3 = E + F;
    E = F;
    F = nextTerm3;
}

// WAP to reverse a number using while loop, do…while loop, for loop.
let numberToReverse = 12345;

console.log("Using while loop : ");
let numToRev1 = numberToReverse;
let reversedNum1 = 0;

while (numToRev1 != 0) {
    let digit = numToRev1 % 10;
    reversedNum1 = reversedNum1 * 10 + digit;
    numToRev1 = Math.floor(numToRev1 / 10);
}
console.log("Reversed Number: " + reversedNum1);


console.log("Using do while loop : ");
let numToRev2 = numberToReverse;
let reversedNum2 = 0;
do {
    let digit = numToRev2 % 10;
    reversedNum2 = reversedNum2 * 10 + digit;
    numToRev2 = Math.floor(numToRev2 / 10);
}
while (numToRev2 != 0);
console.log("Reversed Number: " + reversedNum2);


console.log("Using for loop : ");
let numToRev3 = numberToReverse;
let reversedNum3 = 0;
for (; numToRev3 != 0;) {
    let digit = numToRev3 % 10;
    reversedNum3 = reversedNum3 * 10 + digit;
    numToRev3 = Math.floor(numToRev3 / 10);
}
console.log("Reversed Number: " + reversedNum3);

// WAP to count digits of a number using while loop, do…while loop, for loop.
let numberToCount = 1234567;

console.log("Using while loop : ");
let numToCount1 = numberToCount;
let countDigits1 = 0;
while (numToCount1 != 0) {
    numToCount1 = Math.floor(numToCount1 / 10);
    countDigits1++;
}
console.log("Number of digits: " + countDigits1);


console.log("Using do while loop : ");
let numToCount2 = numberToCount;
let countDigits2 = 0;
do {
    numToCount2 = Math.floor(numToCount2 / 10);
    countDigits2++;
} while (numToCount2 != 0);
console.log("Number of digits: " + countDigits2);



console.log("Using for loop : ");
let numToCount3 = numberToCount;
let countDigits3 = 0;
for(let numToCount3=numberToCount; numToCount3 !=0; ) {
    numToCount3 = Math.floor(numToCount3 / 10);
    countDigits3++;
}
console.log("Number of digits: " + countDigits3);


// WAP to find sum of digits of a number using while loop, do…while loop, for loop.
let numberForSum = 1234578;

console.log("Using while loop : ");
let numForSum1 = numberForSum;
let sumDigits1 = 0;
while (numForSum1 != 0) {
    let digit = numForSum1 % 10;
    sumDigits1 += digit;
    numForSum1 = Math.floor(numForSum1 / 10);
}
console.log("Sum of digits: " + sumDigits1);




console.log("Using do while loop : ");
let numForSum2 = numberForSum;
let sumDigits2 = 0;
do {
    let digit = numForSum2 % 10;
    sumDigits2 += digit;
    numForSum2 = Math.floor(numForSum2 / 10);
} while (numForSum2 != 0);
console.log("Sum of digits: " + sumDigits2);



console.log("Using for loop : ");
let numForSum3 = numberForSum;
let sumDigits3 = 0;
 for(let numForSum3=numberForSum; numForSum3  !=0; ) {
    let digit = numForSum3 % 10;
    sumDigits3 += digit;
    numForSum3 = Math.floor(numForSum3 / 10);
}
console.log("Sum of digits: " + sumDigits3);

// WAP to check whether a number is Magic Number or not using while loop, do…while loop, for loop.

let numm = 19;
let temp = numm;
let summ = 0;


for (let i = temp; i > 0; i = Math.floor(i / 10)) {
    summ = summ + (i % 10);
}


while (summ > 9) {
    let newsum = 0;

    for (let i = summ; i > 0; i = Math.floor(i / 10)) {
        newsum = newsum + (i % 10);
    }

    summ = newsum;
}

// Final check
if (summ == 1) {
    console.log(numm + " is a Magic Number.");
} else {
    console.log(numm + " is not a Magic Number.");
}


