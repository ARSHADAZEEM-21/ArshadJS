// // JS DAY 9

// // 2. forEach loop
// // Example 1: Print all numbers
// let numbers = [10,20,30,40];
// numbers.forEach((num) =>{
//     console.log(num);
// });

// // Example 2: Add price symbol
// let prices = [99,25,145];
// prices.forEach((elem) => {
//     console.log(`$${elem}`)
// });

// let fruits = ["apple","banana","orange"];
// fruits.forEach((fruit , index) => {
//     console.log(`${index + 1}. ${fruit}`);
// });

// // Ex3
// let score = [85,90,75,69];
// let total = 0;
// score.forEach((item) => {
//     total = total + item;
// });
// console.log(`Total: ${total}`);

// // Ex4
// let names = ["ali","bilal","saif"];
// let capNames = [];
// names.forEach((capName)=>{
//     capNames.push(capName.toUpperCase());
// });
// console.log(capNames);




// 3. The Map Method
// It will create a new array with the results of calling a provided function on every element in the calling array.
// Example 1: Double all numbers
let nums = [1, 2, 3, 4];
let doubled = nums.map((num) => num * 2);
console.log(doubled);
console.log(nums);

// Example 2: Convert to uppercase
let names = ["alice", "bob", "charlie"];
let capNames = names.map((element) => element.toUpperCase());
console.log(capNames);

// Example 3: Extract properties from objects
let students = [
    { name: "john", age: 20 },
    { name: "alex", age: 23 },
    { name: "mike", age: 18 }
];
let studentNames = students.map((stdName) => stdName.name);
console.log(studentNames)

let studentAge = students.map((stdAge) => stdAge.age);
console.log(studentAge)

// Example 4: Add sales tax
let sales = [100, 200, 150];
let salesTax = sales.map((tax) => tax * 1.18);
console.log(salesTax)

// Example 5: Create HTML Element
let items = ["Home", "About", "Contact"];
let menuItems = items.map((listItem) => `<li>${listItem}</li>`);
console.log(menuItems);



// 4. The Filter Method
// It will create a new array with all elements that pass the test implemented by the provided function.
// Example 1: Get Even Numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = numbers.filter((evenNum) => evenNum % 2 == 0);
let oddNumbers = numbers.filter((oddNum) => oddNum % 2 != 0);
console.log(oddNumbers)
console.log(evenNumbers)

// Example 2: Get passing grades
let grades = [70, 65, 33, 45, 12, 28, 56];
let passGrades = grades.filter((passGr) => passGr >= 35);
console.log(passGrades);

// Example 3: Filter by string length
let string = ["hi", "hello", "bye", "goodbye"];
let longWords = string.filter((str) => str.length > 3);
console.log(longWords);

// Example 4: Filter adults
let people = [
    { name: "John", age: 17 },
    { name: "Sarah", age: 22 },
    { name: "Mike", age: 15 },
    { name: "Emma", age: 25 }
];
let adults = people.filter((person) => person.age >= 18);
console.log(adults);

// Example 5: Remove specific items
let cart = ["apple", "banana", "apple", "mango", "apple"];
let noApples = cart.filter((item) => item !== "apple");
console.log(noApples);



// 5. The SOME and EVERY Method
// every - all must pass
// some - atleast one pass
// Example 1: Check if all are adults
let ages = [20, 30, 25, 18];
let checkAdt = ages.every((adult) => adult >= 18);
console.log(checkAdt);

// Example 2: Check if any teenager exists
let agess = [20, 25, 17, 30];
let hasTeeanager = agess.some((age) => age >= 18);
console.log(hasTeeanager);

// Example 3: Validate form fields not empty
let formFields = ["John", "john@email.com", "password123"];
let notEmpty = formFields.every((empty) => empty.length > 0);
console.log(notEmpty);

// Example 4: Check if any negative number
let numbs = [1, 3, 4, -2, 7, , 8];
let negativeNum = numbs.some((negNum) => negNum < 0);
console.log(negativeNum);

// Example 5: Check if all prices are affordable
let costs = [50, 75, 120, 67];
let allAffordable = costs.every((cost) => cost < 100);
console.log(allAffordable);



// 6. The Reduce Method
// Reduce takes an array and reduces into a Single Value
// Example 1: Sum of all Numbers
let numb = [1, 2, 3, 4, 5];
let sum = numb.reduce((acc, num) => acc + num, 0);
console.log(sum);

// Example 2: Find maximum value
let values = [45, 78, 12, 89, 34];
let maxValue = values.reduce((current, max) => {
    return current > max ? current : max;
});
console.log(maxValue);

// Example 3: Count Occurence
let fruits = ["apple", "banana", "apple", "orange", "apple"];
let count = fruits.reduce((counter, fruit) => {
    counter[fruit] = (counter[fruit] || 0) + 1;
    return counter;
}, {});
console.log(count);

// Example 4: Calculate total price
let basket = [
    { item: "Shirt", price: 500 },
    { item: "Shoes", price: 1200 },
    { item: "Hat", price: 300 }
];
let totalPrice = basket.reduce((total , product) => 
total = total + product.price,0);
console.log(totalPrice);

// Example 5: Flatten nested arrays
let nested = [[1,2],[2,3],[5,6]];
let flat = nested.reduce((acc , arr) => acc.concat(arr),[]);
console.log(flat);


// 7 Default Parameters
// Example 1: Function with default parameter
function greet(name = "arshad"){
    console.log(`Hi,there ${name}`);
}
greet();

// Example 2: Calculate with default rate
function calRates(amount,taxRate = 1.08){
    return amount * taxRate;
};
console.log(calRates(10000))
console.log(calRates(100000,1.18));

//Example 3: Create user profile
function userProfile(name ,age = 18 ,country = "India"){
    return {name , age, country};
};

console.log(userProfile("Amaan",23,"oman"));
console.log(userProfile("MAX"));

// Example 4: Power function
function power(base,exponent = 2){
    return base**exponent;
};
console.log(power(4))

// Example 5: Array operations
function getSlice(arr, start = 0, end = arr.length) {
return arr.slice(start, end);
};
let points = [1, 2, 3, 4, 5];
console.log(getSlice(points)); // [1, 2, 3, 4, 5]
console.log(getSlice(points, 2)); // [3, 4, 5]
console.log(getSlice(points, 1, 3)); // [2,3]

// 8. The Spread operator
// Example 1: Copy an array
let original = [1,2,3];
let copy = [...original];
console.log("copy",copy);
copy.push(4);
console.log("new copy",copy)
console.log("original",original);

// Example 2: Merge arrays
let fruit = ["apple","kiwi","pineapple"];
let vegitable = ["tomato","carrot"];
let food = [...fruit,...vegitable]
console.log(food);

// Example 3: Add elements while copying
let numBers = [2,3,4];
let moreNums = [1,...numBers,5,6,7];
console.log(moreNums);

// Example 4: Copy and update object
let obj = {
    name : "tom",
    age : 34,
    email : "tom34@cruse.com"
};

let newObj = {
    ...obj,
    city : "chicago",
    email : "tom.mail@cruse.com"
};

console.log(newObj);

// Example 5: Convert string to array
let strng = "CHICKEN";
let strArr = [...strng];
console.log(strArr);

// 9. The Rest Operator
// Opp of Spread Operator (funnel k jaise)
// Example 1: Sum any number of arguments
function add(...numbers){
    return numbers.reduce((total,num)=>total+num,0);
};
console.log(add(3,4,5,6,7,8,9));

// Example 2: First and rest
function announce(first, ...others) {
console.log(`Winner: ${first}`);
console.log(`Others: ${others.join(", ")}`);
}
announce("Alice", "Bob", "Charlie", "David");

// Example 3: Combine with regular parameters
function createTeam(captain,viceCaptain,...players){
    return{
        captain,
        viceCaptain,
        players
    };
};

// console.log(createTeam("virat","rohit","kl rahul","siraj","shami"));
let team = createTeam("virat","rohit","kl rahul","siraj","shami");
console.log(team)

// Example 4: Find maximum
function findMax(...num){
    return Math.max(...num); // using spread to pass array elements
};

console.log(findMax(34,56,87,23,90,12));

// Example 5: Multiply all numbers
function product(multiplier , ...numbers){
    return numbers.map((num) => num * multiplier);
};

console.log(product(3,1,2,3,4,5));


// Spread vs Rest

// Spread :
//  Expand , Array/obj literals , Array -> element , position (anywhere)
let arr = [1, 2, 3];
console.log(...arr); // 1 2 3 (separate values)

// Rest :
// Collects , Function Parameters , Elements -> Array , Position (Must be Last Parameter)
function collect(...items) {
console.log(items); // [1, 2, 3] (array)
}
collect(1, 2, 3);


// 11. Array Destructuring
// Syntax let [variable1, variable2, ...] = array;
// Example 1: Basic destructuring
let colors = ["Red", "Green", "Blue"];
let [first, second, third] = colors;
console.log(first); // "Red"
console.log(second); // "Green"
console.log(third); // "Blue"

// Example 2: Skip elements  
let numberss = [1, 2, 3, 4, 5];
let [one, , three, , five] = numberss;
console.log(one);
console.log(three);
console.log(five);

// Example 3: Swap variables
let a = 10;
let b = 20;
[a, b] = [b, a]; // Swap
console.log(a); // 20
console.log(b); // 10

// Example 5: Get first and rest
let scores = [95, 87, 92, 78, 85];
let [highest, ...remaining] = scores;
console.log(highest); 
console.log(remaining);


// 12. Object Destructuring
// Example 1: Basic object destructuring
let employee = {
    name:"James",
    age: 25,
    grade:"A"
};

let {name,age,grade} = employee;
console.log(name);
console.log(age);
console.log(grade);

// Example 2: Renaming  Variables
let user = {
    userName : "virat123",
    email : "virat@123.com"
};

let {userName:id,email:mail} = user;
console.log(id);
console.log(mail);

// Example 3: With default values
let setting = {
    theme:"dark"
};
let {theme,language = "english"} = setting;
console.log(theme);
console.log(language);

// Example 4: Nested destructuring
let person = {
users: "John",
address: {
city: "Hyderabad",
pin: 500003
}
};
let { users, address: { city, pin } } = person;
console.log(users);
console.log(city);
console.log(pin);

// Example 5: Function parameters
function displayUser({ name, age, country = "India" }) {
console.log(`${name} is ${age} years old from ${country}`);
}
displayUser({ name: "Priya", age: 22 });

displayUser({ name: "Tom", age: 25, country: "USA" });


// Today Practice Exercises
// 1. for each 
// 2. map 
// 3. filter 
// 4. reduce 
// 5. spread 
// 6. rest
// 7. destructring