// variable = A container that stores a value.
//            Behaves as if it were the value it contains.

// 1. declaration    let x;
// 2. assignment     x = 100;

/*let x;
x = 100;*/

//let x = 123;
/*
let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(typeof gpa)
console.log(`You are ${age} years old`);
console.log(`The price is ${price}`);
console.log(`Your gpa is: ${gpa}`);

// Strings

let firstName = "Mitsuha";
let favoriteFood = "Ramen";
let email = "mitsuha@gmail.com"

console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favoriteFood}`);
console.log(`Your email is ${email}`);

// Booleans
let online = true;
let forSale = false;
let isStudent = true;

console.log(typeof online);
console.log(`Mitsuha is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);
*/

let fullName = "Mitsuha Miyamizu";
let age = 18;
let isStudent = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;
