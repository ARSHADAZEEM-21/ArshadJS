// // JS Day 4
// // String Methods & Arrays

// // Seccion 1 , Question 1
// let userInput = "   HeLLo JaVaScRiPt   ";
// let cleanInput = (userInput.trim().toLowerCase());
// console.log(userInput);
// console.log(cleanInput);

// // S1,Q2
// let email = " USER@EXAMPLE.COM ";
// let formattedEmail = (email.trim().toLowerCase())
// console.log(email);
// console.log(formattedEmail);

// // S2,Q1
// let sentence ="JavaScript is awesome and JavaScript is fun";
// console.log(`awesome index : ${sentence.indexOf("awesome")}  , Javascript : ${sentence.indexOf("JavaScript")} , python:${sentence.indexOf("python")}`);

// // S2,Q2
// let message = "Welcome to coding class";
// console.log(`coding index ${message.indexOf("coding")}`);
// if(message.indexOf != -1){
//     console.log("Found coding");
// }
// else{
//     console.log("coding not found");
// }

// // S3,Q1
// let rawData = " MESSY iNpuT ";
// const processedData = rawData
// .trim()
// .toLowerCase()
// .replace("input","value");
// console.log(processedData);

// // S3,Q2
// let password = " MyP@ssw0rd123 ";
// const securePass = password
// .trim()
// .toUpperCase()
// .slice(0,9);
// console.log(securePass);

// // S4,Q1
// let fullName = "Alexander Hamilton";
// let firstName = fullName.slice(0,9);
// let lastName = fullName.slice(10);
// console.log(firstName);
// console.log(lastName);

// S4,Q2
let phone = "9876543210";
let areaCode = phone.slice(0,3);
let lastFour = phone.slice(6);
console.log(`Area code: ${areaCode}, Last Four: ${lastFour}`);

// S5,Q1
let announcement = "The event will happen on Monday and Monday only";
const updatedAnnouncement = announcement.replace("Monday","Friday");
console.log(announcement);
console.log(updatedAnnouncement);

// S5,Q2
let template = "Hello NAME, welcome to our website";
const personalizedMessage = template.replace("NAME","Arshad");
console.log(personalizedMessage);

// S6,Q1
let color = ["red","green","blue","yellow"];
console.log(color);
console.log(color[0]);
console.log(color[color.length - 1]);
console.log(color.length);

// S6,Q2
let score = [85,92,78,90,88];
console.log(score[2]);
score[0] = 95;
console.log(score);
const sum = score[0] + score[1];
console.log(sum);

// S7,Q1
let playlist = [];
playlist.push("Song1");
playlist.push("Song2");
// console.log(playlist);
let removed = playlist.pop()
playlist.unshift("Song0");
console.log(`Present Playlist: ${playlist}, Removed Song: ${removed}`);

// S7,Q2
let queue = ["First", "Second", "Third"];
let served = queue.shift();
queue.push("Fourth");
queue.shift();
console.log(`queue: ${queue},served: ${served}`);

// S8,Q1
let fruits = ["apple", "banana", "mango", "orange", "banana"];
console.log(`Position of mangoes: ${fruits.indexOf("mango")}, position of bananas: ${fruits.indexOf("banana")}, position of bananas: ${fruits.indexOf("grapes")}`);

// S8,Q2
let inventory = ["laptop", "mouse", "keyboard", "monitor"];
// console.log(`check mouse: ${inventory.includes("mouse")}, check printer: ${inventory.includes("printer")}`);
if(inventory.includes("mouse")){
    console.log("Mouse is available");
}
else{
    console.log("Mouse is not available")
}
if(inventory.includes("printer")){
    console.log("printer is available");
}
else{
    console.log("printer is not available");
}

// S9,Q1
let morningClasses = ["Math", "English", "Science"];
let afternoonClasses = ["History", "Art", "PE"];
const fullSchedule = morningClasses.concat(afternoonClasses);
console.log(fullSchedule);
console.log(`Total number of classes: ${fullSchedule.length}`);

// S9,Q2
let numbers = [1,2,3,4,5];
let reversed = numbers.reverse();
console.log(reversed);

// S10,Q1
let months = ["Jan", "Feb", "Mar", "May", "Jun"];
months.splice(3,0,"Apr");
console.log(months);

// S10,Q2
let students = ["alice","bob","charlie","david","eve"];
students.splice(2,1);
students.splice(2,0,"frank"),students.splice(3,0,"grace");
console.log(students);

// S11,Q1: Array References
let original = [1,2,3];
let reference = original;
reference[0] = 99;

console.log("original:", original);
console.log("reference:", reference);

// S11,Q2
let arr1 = [1,2,3];
let arr2 = [1,2,3];
let result1 = arr1 == arr2;
let result2 = arr1 === arr2;
console.log(result1)
console.log(result2)

// S12,Q1: Nested Arrays
let board = [
["X", "O", "X"],
["O", "X", "O"],
["X", "O", "X"]
];

console.log(board[0][1]);
console.log(board[1][1]);
board[1][1] = "O";
console.log(board)

// S12,Q2
let scores = [
["Alice", 85, 90, 92],
["Bob", 78, 85, 88],
["Charlie", 92, 88, 95]
];
console.log(scores[0][2]);
console.log([2][0]);
let bobAvg = (scores[1][1] + scores[1][2] + scores[1][3])/3
console.log(bobAvg);
scores[1][1] = 82;
console.log(scores);
