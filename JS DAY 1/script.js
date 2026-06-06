// // Creating a variable and assigning a value
// let age = 23;
// let Name = "Tony Stark";
// let isStudent = true;
// console.log(Name, age, isStudent)


// // You can also declare without assigning (value will be undefined)
// let score;
// console.log(score); // Output: undefined
// // Later assign a value
// score = 95;
// console.log(score); // Output: 95


// let name = "Tony Stark"; // Double quotes
// let greeting = 'Hello'; // Single quotes
// let message = `Welcome, ${name}`; // Template literals (backticks) output: "Welcome, Tony Stark"
// console.log(greeting,message);


// // Template literals allow embedded expressions
// let age = 23;
// let info = `I am ${age} years old`; // Output: "I am 23 years old"
// console.log(info);

//-------------------------------------------
//assignments

// let firstName = "Arshad";
// let age = 21;
// let isStudent = true;
// let color = "fav color is black";
// let siblings = 2;
// console.log(`My name is ${firstName} and I am ${age} years old. My ${color} and I have ${siblings} siblings.`);
// console.log(typeof firstName, typeof age, typeof isStudent, typeof color, typeof siblings);

// let score;
// console.log(score,typeof score);

// let winner = null;
// console.log(winner,typeof winner)
// //undefined and null means its value is empty
// //you forget to define a value is undefined
// //you wantedly didn't assign the value is null

let firstName = 'Arshad';
let lastName = 'Azeem';
let fullName = firstName + lastName;
console.log(fullName);

let a = "5";
let b = 3;
let result = a + b;
console.log(result);
console.log(typeof result);

let num1 = 45;
let num2 = 12;
let add = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
console.log(num1,num2)
console.log("add = ",add)
console.log("sub = ",sub)
console.log("mul = ",mul)
console.log("div = ",div)

let celsius = 25;
let fahrenheit = (celsius*9/5)+32;
console.log(`25'C is equal to ${fahrenheit} F`)

//given radius of circle is 7 
let radius = 7;
let circumference = 2*Math.PI*radius;
let area = Math.PI*radius*radius;
console.log(area.toFixed(2),circumference.toFixed(2));

let books = 45;
let pen = 15;
let bag = 850;
let subTotal = books*3 + pen*2 + bag;

console.log(`subtotal : ${subTotal}`)
console.log(`discount : ${subTotal/10}`)