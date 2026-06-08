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

// let firstName = 'Arshad';
// let lastName = 'Azeem';
// let fullName = firstName + lastName;
// console.log(fullName);

// let a = "5";
// let b = 3;
// let result = a + b;
// console.log(result);
// console.log(typeof result);

// let num1 = 45;
// let num2 = 12;
// let add = num1 + num2;
// let sub = num1 - num2;
// let mul = num1 * num2;
// let div = num1 / num2;
// console.log(num1,num2)
// console.log("add = ",add)
// console.log("sub = ",sub)
// console.log("mul = ",mul)
// console.log("div = ",div)

// let celsius = 25;
// let fahrenheit = (celsius*9/5)+32;
// console.log(`25'C is equal to ${fahrenheit} F`)

// //given radius of circle is 7 
// let radius = 7;
// let circumference = 2*Math.PI*radius;
// let area = Math.PI*radius*radius;
// console.log(area.toFixed(2),circumference.toFixed(2));

// let books = 45;
// let pen = 15;
// let bag = 850;
// let subTotal = books*3 + pen*2 + bag;

// console.log(`subtotal : ${subTotal}`)
// console.log(`discount : ${subTotal/10}`)
// console.log(`total : ${subTotal - subTotal/10}`)

// let number = 17;
// let results = (number % 2 === 0) ? "Even" : "Odd";
// console.log(results); // Output: "Odd"

// let result1 = 10+5*2;
// console.log(result1) //20

// let result2 = (10 + 5) * 2;
// console.log(result2) //30

// let result3 = 20 / 4 + 3 * 2;
// console.log(result3) //11

// let result4 = 2 ** 3 + 5;
// console.log(result4) //13

// let result5 = (8 + 2) / 5 * 3;
// console.log(result5) //6

// let finalResult = ((15+5)*3-10)/4
// console.log(finalResult)

// let balance = 5000;

// console.log("Initial Balance:", balance);

// // Salary received
// balance += 15000;
// console.log("After Salary:", balance);

// // Rent paid
// balance -= 8000;
// console.log("After Rent:", balance);

// // Bonus received
// balance += 5000;
// console.log("After Bonus:", balance);

// // Shopping expense
// balance -= 3000;
// console.log("After Shopping:", balance);

// // Final balance
// console.log("Final Balance:", balance);


// let investment = 10000;
// console.log("initial investment : ", investment.toFixed(0))

// investment *= 1.10;
// console.log("year 1 returns : ", investment.toFixed(0))

// investment *= 1.10;
// console.log("year 2 returns : ", investment.toFixed(0))

// investment *= 1.10;
// console.log("year 3 returns : ", investment.toFixed(0))

// let x = 10;
// let y = x++;
// console.log("x:", x, "y:", y);

// let c = 10;
// let v = ++c;
// console.log("c:", c, "v:", v);

// let countdown = 10;
// countdown -= 1;
// console.log(countdown)
// countdown -= 1;
// console.log(countdown)
// countdown -= 1;
// console.log(countdown)
// countdown -= 1;
// console.log(countdown)
// countdown -= 1;
// console.log(countdown)
// countdown -= 1;
// console.log(countdown)
// countdown -= 1;
// console.log(countdown)
// countdown -= 1;
// console.log(countdown)
// countdown -= 1;
// console.log(countdown)

// let num = 5;
// let newNum = num++;
// newNum = ++num;
// console.log("num: ",num , "newNum: ",newNum)

// let math = 85;
// let science = 92;
// let eng = 78;
// let hist = 88;
// let comp = 95;
// let avgMarks = math + science + eng + hist + comp;
// console.log("average marks: ",avgMarks)

// let cYear = 2026;
// let bday = 2005;
// let age = cYear - bday;
// console.log(`In ${cYear}, i am ${age} years old`)

let a = 10;
let b = 20;
a += 10;
b -= 10;
console.log("a:",a ,"b: ",b)

let num = 456;
console.log(num)

let firstDigit = Math.floor(num / 100);      // 4
let remaining = num % 100;                   // 56
console.log(remaining)

let secondDigit = Math.floor(remaining / 10); // 5
let lastDigit = remaining % 10;               // 6
console.log(lastDigit)
let sum = firstDigit + secondDigit + lastDigit;

console.log("single digit is sum: ",sum); // 15