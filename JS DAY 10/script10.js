// JS DAY 10
// DOM - Document Object Model
// Part 1:Selecting Elements by ID
console.log(document.getElementById("mainHeading"));
// let intro = document.getElementById("intro");
console.log(document.getElementById("intro"));

let skills = document.getElementById("skillsList");
console.log(skills)

let gallery = document.getElementById("gallery");
console.log(gallery);

console.log(document.getElementById("pageFooter"))

// Part 2: Selecting Elements by Class Name
// console.log(document.getElementsByClassName("description"))

// 1.Select All Description Paragraphs
let description = document.getElementsByClassName("description");
console.log(description);
console.log(description.length)


// 2.Select All Skill List Items
let skill = document.getElementsByClassName("skill");
console.log(skill);
console.log(skill.length)


// 3.Select All Project Images
console.log(document.getElementsByClassName("project"));


// 4.Access Individual Elements
console.log(description[0])
console.log(description[1])


// 5.Loop Through Skills
for (let i=0; i< skill.length;i++){
    console.log(skill);
}


// Part 3: Selecting Elements by Tag Name
// 1. Selecting all paragraphs
let paras = document.getElementsByTagName("p");
console.log(paras);
console.log(paras.length);

// 2. Select All Headings
console.log(document.getElementsByTagName("h2"));

// 3. Select All Links
let links = document.getElementsByTagName("a");
console.log(links);
console.log(links.length);

// 4.Select All Images
console.log(document.getElementsByTagName("img"));

// 5. Access First Paragraph
console.log(paras[0])


// Part 4: Using querySelector
// 1. Select Main Heading with querySelector
console.log(document.querySelector("#mainHeading"));

// 2. Select First Description Paragraph
const des = document.querySelector(".description");
console.log(des);

// 3. Select First Skill
console.log(document.querySelector(".skill"));

// 4. Select First Link in Footer
console.log(document.querySelector("footer a"));

// 5.Select Gallery Div
console.log(document.querySelector("#gallery"));


// Part 5: Using querySelectorAll
// 1. Select All Description Paragraphs
const desc = document.querySelectorAll(".description");
console.log(desc);
console.log(desc.length)

// 2. Select All Skills
console.log(document.querySelectorAll(".skill"));

// 3. Select All Contact Links
console.log(document.querySelectorAll(".contact-link"));

// 4. Select All Images in Gallery
console.log(document.querySelectorAll("#gallery img"));

// 5.Select All Containers
const containers = document.querySelectorAll(".container");
console.log(containers);
console.log(containers.length)


// Part 6: Working with innerText
// 1. Get and Log Text
const mainHeading = document.querySelector("#mainHeading");
console.log(mainHeading.innerText);

// 2. Change Heading Text
mainHeading.innerText = "Javascript DOM Assignment";
console.log(mainHeading)

// 3. Get Intro Paragraph Text
const intro = document.querySelector("#intro");
console.log(intro.innerText);

// 4. Change First Desecription
des.innerText = "I love Learning Javascript";

// 5. Get Skills Text
console.log(document.querySelector(".skill"));


// Part 7: Working with textContent
// 1. Get Text Content of Intro
console.log("textContent:", intro.textContent);
console.log(intro.innerText);

// 2. Change Footer Text
let firstLink = document.querySelector("#pageFooter .contact-link");
firstLink.textContent = "copy right 2024";
console.log(firstLink);

// 3. Get All Text from Container
let firstDiv = document.querySelector(".container");
console.log(firstDiv.textContent);

// 4. Set Text Content of Heading
let secondHeading = document.querySelectorAll("h2")[1];
secondHeading.textContent = "Updated section";
console.log(secondHeading);