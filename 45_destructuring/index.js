// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring
//                 5 examples

// ---------- EXAMPLE 1 ----------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1

// ---------- EXAMPLE 2 ----------
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors); // ["white", "green", "blue", "black", "red"]

// ---------- EXAMPLE 3 ----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor)  // red
console.log(secondColor) // green
console.log(thirdColor)  // blue
console.log(extraColors) // ["black", "white"]

// ---------- WXAMPLE 4 ----------
// EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstName: "Claire",
    lastName: "Redfield",
    age: 19,
    job: "College Student",
}

const person2 = {
    firstName: "Chris",
    lastName: "Redfield",
    age 24,
}

const {firstName, lastName, age, job="Special Tactics and Rescue Service"} = person2;

console.log(firstName); // Chris
console.log(lastName);  // Redfield
console.log(age);       // 24
console.log(job);       // Special Tactics and Rescue Service

// ---------- EXAMPLE 5 ----------
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job="Police Officer"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person1 = {
    firstName: "Claire",
    lastName: "Redfield",
    age: 19,
    job: "College Student",
}

const person2 = {
    firstName: "Chris",
    lastName: "Redfield",
    age 24,
}