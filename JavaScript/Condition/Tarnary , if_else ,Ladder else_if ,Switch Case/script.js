// Wap to find max/min from 5 number using ladder else if.

console.log("1.Wap to find max/min from 5 number using ladder else if.")
const a = 21, b = 344, c = 23, d = 34, e = 45;

if (a > b && a > c && a > d && a > e) {
    console.log("a is maximum ");
}
else if (b > a && b > c && b > d && b > e) {
    console.log("b is maximum");
}
else if (c > a && c > b && c > d && c > e) {
    console.log("C is maximum ");
}
else if (c > a && c > b && c > d && c > e) {
    console.log("C is maximum ");
}
else if (d > a && d > b && d > c && d > e) {
    console.log("d is maximum ");
}
else {
    console.log("e is maximum ");
}

if (a < b && a < c && a < d && a < e) {
    console.log("a is minimum ");
} else if (b < a && b < c && b < d && b < e) {
    console.log("b is minimum");
} else if (c < a && c < b && c < d && c < e) {
    console.log("C is minimum ");
} else if (d < a && d < b && d < c && d < e) {
    console.log("d is minimum ");
} else {
    console.log("e is minimum");
}

// 2. Wap to find grade based using given percentage of 5 using mark out of 100
console.log("2. Wap to find grade based using given percentage of 5 using mark out of 100");
const mark = 90;
if (mark >= 90 && mark <= 100) {
    console.log("Grade A");
} else if (mark >= 80 && mark < 90) {
    console.log("Grade B");
} else if (mark >= 70 && mark < 80) {
    console.log("Grade C");
} else if (mark >= 60 && mark < 70) {
    console.log("Grade D");
} else if (mark >= 50 && mark < 60) {
    console.log("Grade E");
} else if (mark >= 0 && mark < 50) {
    console.log("Grade F");
} else {
    console.log("Invalid mark");
}

// 3. Wap to calculate electricity bill using ladder else if.
console.log("3. Wap to calculate electricity bill using ladder else if.");

const unit = 65;
if (unit >= 1 && unit <= 10) {
    console.log("Your bill is ", unit * 10);
} else if (unit >= 11 && unit <= 20) {
    console.log("Your bill is ", unit * 15);
} else if (unit >= 21 && unit <= 30) {
    console.log("Your bill is ", unit * 20);
}
else if (unit >= 31 && unit <= 40) {
    console.log("Your bill is ", unit * 25);
} else if (unit >= 41 && unit <= 50) {
    console.log("Your bill is ", unit * 35);
} else if (unit >= 51 && unit <= 60) {
    console.log("Your bill is ", unit * 45);
}
else if (unit >= 61 && unit <= 70) {
    console.log("Your bill is ", unit * 55);
}
else if (unit >= 71 && unit <= 80) {
    console.log("Your bill is ", unit * 65);
}
else if (unit >= 81 && unit <= 90) {
    console.log("Your bill is ", unit * 75);
}
else if (unit >= 91 && unit <= 100) {
    console.log("Your bill is ", unit * 85);
}
else{
    console.log("Your bill is ", unit * 100);
}

// "4.wap to chek number is divisible by 7 or not, using ladder else if.
console.log(
  "4.wap to chek number is divisible by 7 or not, using ladder else if.",
);
const num = 23;
if (num % 7 == 0) {
  console.log(num + " Number is divisible by 7");
} else {
  console.log(num + " Number is not divisible by 7");
}

// 5.wap to check number is even or odd using by if else
console.log("5.wap to check number is even or odd using by if else");
const number = 263459;
if (number % 2 == 0) {
  console.log(number + " Number is even");
} else {
  console.log(number + " Number is odd");
}

// 6.wap to chek user is eligible for vote or not using ternary operator
console.log(
  "6.wap to chek user is eligible for vote or not using ternary operator.",
);
const age = 20;
age >= 18
  ? console.log("User is eligible for vote")
  : console.log("User is not eligible for vote");


// 7.wap to chek number is nuterial, negative or positive using ternary operator
console.log(
  "7.wap to chek number is nuterial, negative or positive using ternary operator",
);
const n = 5;
n > 0
  ? console.log("number is positive !!")
  : n == 0
    ? console.log("number is nutirial !!")
    : console.log("number is negetive !!");

// 8.wap to display month name by number using by switch case
console.log("8.wap to display month name by number using by switch case.");
const month = "12";
switch (month) {
  case "1":
    console.log("January");
    break;
  case "2":
    console.log("February");
    break;
  case "3":
    console.log("March");
    break;
  case "4":
    console.log("April");
    break;
  case "5":
    console.log("May");
    break;
  case "6":
    console.log("June");
    break;
  case "7":
    console.log("July");
    break;
  case "8":
    console.log("August");
    break;
  case "9":
    console.log("September");
    break;
  case "10":
    console.log("Octomber");
    break;
  case "11":
    console.log("November");
    break;
  case "12":
    console.log("December");
    break;
  default:
    console.log("enter valid number !!");
}


// 9.wap to message based on grade using switch case
console.log("9.wap to message based on grade using switch case.");
const grade = "B";
switch (grade) {
  case "A+":
    console.log("Exellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "c":
    console.log("Average");
    break;
  case "D":
    console.log("Poor");
    break;
  case "E":
    console.log("Fail");
    break;
  default:
    console.log("Enter your grade !!");
}




