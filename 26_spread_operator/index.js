// spread operator = ... allows an iterable such as an
//                   array or string to be expanded
//                   into seperate elements
//                   (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum); // 5
console.log(minimum); // 1

// ----- String -----

let username = "Mitsuha Miyamizu";
let letters = [...username].join("-");

console.log(letters); // M-i-t-s-u-h-a- -M-i-y-a-m-i-z-u

// ----- Array -----
let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let newFruits = [...fruits];
let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(newFruits);