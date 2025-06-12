// arrow functions = a concise way to write function expressions
//                   good for simple functions that you use only once
//                   (parameters) => some code

const hello = (name, age) => {console.log(`Hello there! I am ${name}`)
                              console.log(`I'm ${age} years old`)};

hello("Claire", 19);

////////////////////////////////////////////////////////////

setTimeout(hello, 3000);

function hello(){
    console.log("Hello");
}

////////////////////////////////////////////////////////////

setTimeout(function(){
    console.log("Hello");
}, 3000)

////////////////////////////////////////////////////////////

setTimeout( () => console.log("Hello"), 3000);

////////////////////////////////////////////////////////////

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares); // [1, 4, 6, 9, 16, 25, 36]
console.log(cubes); // [1, 8, 27, 64, 125, 216]
console.log(evenNums); // [2, 4, 6]
console.log(oddNums); // [1, 3, 5]
console.log(total); // 21

