// array = a variable like structure that can hold
//         more than 1 value

let fruits = ["apple", "orange", "banana"]

fruits[0] = "coconut";
fruits[3] = "pizza";

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);


//fruits.push("lasagna");
//fruits.pop();
//fruits.unshift("mango");
//fruits.shift();

let numOfFruits = fruits.length;
let index = fruits.indexOf("apple");

console.log(index);

////////////////////////////////////////////////////////////

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.sort() // sort in alphabetical order
fruits.sort().reverse() // sort in reverse

for(let fruit of fruits){
    console.log(fruit);
}
