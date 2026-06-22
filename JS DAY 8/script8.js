// JS Day 8
// Part 1, Q1
const car = {
    brand: "BMW",
    model: 2026,
    price: 100000,

    displayInfo: function () {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, price: $${this.price}`);
    },

    applyDiscount: function (percentage) {
        this.price = this.price - (this.price * percentage / 100);
        console.log(`New Price after ${percentage}% discount: $${this.price}`);
    }
};

car.displayInfo();
car.applyDiscount(10);

// P1,Q2
const student = {
    name:"Alex",
    subjects:[
        {name:"Math",marks:85},
        {name:"Science",marks:90},
        {name:"English",marks:88}
    ],
    calculateAverage: function() {
        const total = this.subjects.reduce((acc, subject) => acc + subject.marks, 0);
        const average = total / this.subjects.length;
        console.log(`Average marks: ${average}`);
    },

    displayReport: function(){
        console.log(`Student Name: ${this.name}`);
        this.calculateAverage();
    }
}
student.displayReport();

// P2,Q1
function saveDivide (a,b) {
    try{
        if(b == 0){
            throw new Error("Cannot divide by zero!");
        }
        return a / b;
    }
    catch (error){
        console.log("Error:", error.message);
    }
}
let saveDiv = saveDivide(20,5);
console.log(saveDiv);

