// // Javascript day 2
// // pblm 2
// let userName = "alice";
// let firstPrice = 1000;
// let total_cost = 250;
// let userAge = 25;
// console.log(userName,userAge,firstPrice,total_cost)

// // pblm 3
// let email = "john@example.com";
// let isLogged = true;
// const max_attempt = 3;
// let finalGrade = 8.5;
// let productPriceIn_$ = 99.99;

// // pblm 4
// let raining = false;
// let age = prompt("enter the age");
// let isAdult = age >= 18;
// console.log(isAdult)
// let doesPasswordMatch = false;

// // pblm 5
// let x = 10;
// console.log(typeof x); // Prediction: number
// x = "Hello";
// console.log(typeof x); // Prediction: string
// x = true;
// console.log(typeof x); // Prediction: boolean

// // pblm 6
// let language = "javascript"
// language[0];
// language[4];

// // pblm 7
// let message1 = "lorme4 djsfioqjewolkjdsjofijwe";
// console.log(message1)

// // pblm 8
// let firstName = "John";
// let lastName = "Doe";
// let fullName = firstName+lastName;
// console.log(fullName)

// let greeting = `Hello! ${fullName}`;
// console.log(greeting);

// let age = 25;
// let info = `${firstName} is ${age} years old`;
// console.log(info);

// // pblm 9
// let name = "Alice";
// let score = 95;
// let message = `Student ${name} scored ${score} points.`;
// console.log(message)

// let product = "Laptop";
// let price = 999;
// let quantity = 2;
// let total = price * quantity;
// let receipt =`Item: ${product} , Quantity: ${quantity} Total: $${total}`;
// console.log(receipt);

// // pblm 10
// let cityName = "Paris";
// let temperature = 25;
// // Create: "The temperature in Paris is 25 degrees."
// let weather = `The Temperature in ${cityName} is ${temperature} degrees`;
// console.log(weather);

// let hourOfDay = 14;
// let userName = "Bob";
// // Create: "Good afternoon, Bob! It's 14:00."
// let greeting = `Good afternoon, ${userName}! It's ${hourOfDay}`;
// console.log(greeting)

// // pblm 11
// // A variable declared but not assigned
// let score;
// console.log(score); // Output: null
// // A variable intentionally set as empty
// let winner = "";
// console.log(winner); // Output: undefined
// // Accessing a non-existent property
// let user = { name: "Alice" };
// console.log(user.age); // Output: -null

// // pblm 12
// console.log(10 > 5); // true
// console.log(3 < 2); // false
// console.log(5 >= 5); // true
// console.log(8 <= 10); // true
// console.log(7 != 7); // false
// console.log(15 > 20); // false

// // pblm 13
// let age = 25;
// // Evaluate and print whether age is at least 18
// console.log(age >= 18);
// let temp = 30;
// console.log(temp>=25)
// let score = 75;
// console.log(score<60)

// // pblm 14
// console.log(5 == 5); 
// console.log(5 === 5);  
// console.log(5 == "5");  
// console.log(5 === "5"); 
// console.log(true == 1);  
// console.log(true === 1);  
// console.log(0 == false); 
// console.log(0 === false);

// // pblm 15
// let userInput = "10";
// if (userInput === 10) {
// console.log("Input is 10");
// }

// // Pblm 16
// console.log('a' > 'A'); // true 97>65
// console.log('b' < 'c'); // true 98<99
// console.log('apple' < 'banana'); // true compare a and b
// console.log('Z' < 'a'); // true 90<97
// console.log("10" < "2");//true compare first character 1 and 2

// // pblm 17
// let str1 = "Hello";
// let str2 = "HELLO";
// console.log(str1>str2);

// // pblm 18
// let userName = "Sarah";
// let hour = 9;
// let greeting = `Good Morning, ${userName}!` ;
// console.log(greeting);

// // pblm 19
// let userAge = 16;
// let minimumAge = 18;
// let isOldEnough = minimumAge < userAge;
// console.log(isOldEnough)

// // pblm 20
// let email = "mark@example.com";
// let firstChar = email[0];
// let isValid = firstChar >= 'a' && firstChar <= 'z';
// console.log(isValid);

// // pblm 21
// let productName = "Wireless Mouse";
// let productPrice = 29.99;
// let inStock = true;
// // Create: "Product: Wireless Mouse | Price: $29.99 | In Stock: true"
// let description = `Prouduct: ${productName} | Price: $${productPrice} | In Stock: ${inStock}`;
// console.log(description);

// // pblm 22
// let firstName = "John";
// let middleName = "Robert";
// let lastName = "Smith";
// // Create initials: "J.R.S."
// let initials = firstName[0] + middleName[0] + lastName[0];
// console.log(initials);

// // pblm 23
// let firstPlace = "Gold";
// let userName = "Alice";
// let total_cost = 100;
// let age = prompt("enter your age:");
// if (age >= 18) {
// console.log("You can vote");
// }
// else{
//     console.log("you are minor");
// }
// let message = `'It's a beautiful day1`;

//pblm 24
let userInput = "25";
if (userInput == 25) {
console.log("Input is correct");
} else {
console.log("Input is incorrect");
}

// pblm 25 
let password = "Pass123";
let firstCh = password[0];
// Check the following:
// 1. Password length is at least 6 characters
let isLongEnough = password.length >= 6;
// 2. First character is uppercase (between 'A' and 'Z')
let startsWithUppercase = firstCh >= 'A' && firstCh <='Z';
// 3. Last character is a digit (between '0' and '9')
let lastCh = password[password.length - 1];
let endsWithDigit = lastCh >= '0' && lastCh <= '9';
console.log("Password is long enough:", isLongEnough);
console.log("Starts with uppercase:", startsWithUppercase);
console.log("Ends with number:", endsWithDigit);