// // JavaScript Day 3: control flow

// //  if-else statement
// // pblm 1
// let num = -5;
// if (num > 0) {
//     console.log("Given Number is a Positive Number")
// }
// else if (num < 0) {
//     console.log("Given Number is a Negative Number")
// }
// else if (num === 0) {
//     console.log("Given Number is a ZERO")
// }
// else {
//     console.log("Enter a valid input")
// }

// // pblm 2
// let age = 17 ;
// if (age >= 18){
//     console.log("eligible for licence");
// }
// else{
//     console.log("Not eligible for licence");
// }

// pblm 3
let marks = 85;
if ((marks >= 90) && (marks <= 100)) {
    console.log("Grade A");
}
else if ((marks >= 80) && (marks <= 89)) {
    console.log("Grade B");
}
else if ((marks >= 70) && (marks <= 79)) {
    console.log("Grade C");
}
else if ((marks >= 60) && (marks <= 69)) {
    console.log("Grade D");
}
else {
    console.log("Fail");
}

// Part B: Logical Operators
// pblm 4
let username = "admin";
let password = "12345";
if ((username === "admin") && (password === "12345")) {
    console.log("Logged in Succesfully");
}
else {
    console.log("Loggin Failed Try Again")
}

// pblm 5
let day = "monday";
if ((day === "saturday") || (day === "sunday")) {
    console.log("weekend")
}
else {
    console.log("Weekdays");
}

// // pblm 6
// let age = 25;
// if (age >= 60) {
//     console.log("Ticket Price: $6");
// }
// else if ((age >= 12) && (age < 60)) {
//     console.log("Ticket Price: $8");
// }
// else {
//     console.log("Ticket Price: $5");
// }

// pblm 7
let orderTotal = 350;
let isPremium = true;
if ((orderTotal > 499) || (isPremium = true)) {
    console.log("free shipping");
}

// Part C: Nested Conditionals
// pblm 8
let points = 75;
if (points >= 33) {
    if (points >= 80) {
        console.log("pass with distinction");
    }
    else {
        console.log("pass");
    }
}

else {
    console.log("Fail");
}

// pblm 9
let temperature = 25;
let isRaining = false;

if (temperature > 30) {
    console.log("Hot day");
} else if (temperature >= 20 && temperature <= 30) {
    if (isRaining) {
        console.log("Pleasant but rainy");
    } else {
        console.log("Perfect weather");
    }
} else {
    console.log("Cold day");
}

// Part D: Switch Statement
// pblm 10
let dayNum = "3";
switch (dayNum) {
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// pblm 11
let signal = "yellow";
switch (signal) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("invalid input");
}

// pblm 12
let month = 7;
switch (month) {
    case 1:
    case 2:
    case 12:
        console.log("Winter Season");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring Season");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer Season");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Fall Season");
        break;
    default:
        console.log("invalid input");
        break;
}

// Part E: Truthy and Falsy
// pblm 13
let userName = "";
if (userName) {
    console.log("Welcome");
}
else {
    console.log("Please enter a username")
}

// pblm 14
let score = 0;
if (score) {
    console.log(`Your Score is : ${score}`);
}
else {
    console.log("No Score Yet")
}

// Part F: Combining Everything
// pblm 15
let age = 20;
let isCitizen = true;
let hasVoted = false;
if (age >= 18 && isCitizen && !hasVoted) {
    console.log("you can vote");
}
else {
    console.log("No!,you can't vote");
}

// pblm 16
const total = 120;
const isVip = false;
let discount = 0;
if (isVip) {
    discount = 20;
}
else if (total > 100) {
    discount = 15;
}
else if (total > 50) {
    discount = 10;
}
else {
    discount = 0;
}

const finalAmount = total * (1 - discount / 100);

console.log(`Discount : ${discount}`);
console.log(`Final Amount : ${finalAmount}`);

// pblm 17
let num = 15;
if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
}
else if (num % 3 === 0) {
    console.log("Fizz");
}
else if (num % 5 === 0) {
    console.log("Buzz");
}
else {
    console.log(`number is : ${num}`);
}

// // Part G : Interaction
// // pblm 18
// let userAge = prompt("enter your age :");
// if (userAge >= 18){
//     alert("you can vote");
// }
// else{
//     alert("you cannot vote");
// }

// // pblm 19
// let numOne = prompt("enter first number :");
// let numTwo = prompt("enter second number :");
// let result = prompt("select operator : +,-,*,/");
// switch (result) {
//     case "+":
//         alert(`Addition ${numOne + numTwo}`);
//         break;
//     case "-":
//         alert(`Subscration : ${numOne - numTwo}`);
//         break;
//     case "*":
//         alert(`Multiply : ${numOne * numTwo}`);
//         break;
//     case "/":
//         alert(`Divide : ${numOne / numTwo}`);
//         break;
//     default:
//         alert("enter valid inputs");
//         break;    
// }

// // pblm 20
// let secNum = 7;
// let guessNum = prompt("enter your guess number : ");
// if(guessNum == secNum){
//     console.log("Congratulations!");
// }
// else if (guessNum > secNum){
//     console.log("Too High!");
// }
// else{
//     console.log("Too low!");
// }

// Part H : Challange Problems
// pblm 21
let str = "Arshad";
if ((str[0] == "A" || str[0] == "a") && str.length > 5) {
    console.log("Golden String");
}
else {
    console.log("Not a Golden String")
}

// pblm 22
let num1 = 45;
let num2 = 67;
let num3 = 22;
if (num1 > num2 && num1 > num3) {
    console.log("Number 1 : is Greater");
}
else if (num2 > num3 && num2 > num1) {
    console.log("Number 2 : Greater");
}
else if (num3 > num1 && num3 > num2) {
    console.log("Number 3 : Greater");
}

// pblm 23
let quater = "2";
switch (quater) {
    case "1":
        console.log("Jan , Feb , Mar");
        break;
    case "2":
        console.log("Apr , May , Jun");
        break;
    case "3":
        console.log("Jul , Aug , Sep");
        break;
    case "4":
        console.log("Oct , Nov , Dec");
        break;
    default:
        console.log("invalid input");
}

// // pblm 24
// let div10 = prompt("enter value :");
// if(div10 % 10 === 0){
//     console.log("Good")
// }
// else{
//     console.log("Bad");
// }

// pblm 25
let n_um = 14;
if(n_um % 7 === 0 && n_um % 2 === 0){
    console.log("Special Number");
}
else if (n_um % 7 === 0 && n_um % 2 !== 0){
    console.log("Lucky Number");
}
else{
    console.log("Regular Number");
}