// type conversion = change the datatype of a value to another
//                   (strings, numbers, booleans)

/*
let age = window.prompt("How old are you?");
age = Number(age);
age += 1;

console.log(age, typeof age);
*/


// What if we try to convert a string?

let x = "ramen";
let y = "ramen";
let z = "ramen";

x = Number(x); // You'll get NaN
y = String(y); // ramen string
z = Boolean(z); // true (if it's not empty you'll always get "true")

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z); 


// What if we try to typecasting an empty string?

let x = "";
let y = "";
let z = "";

x = Number(x); // 0
y = String(y); // string
z = Boolean(z); // false (User didn't input anything)

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z); 