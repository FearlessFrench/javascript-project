// function declaration = define a reusable block of code that performs a specific task
//                        that performs a specific task
/*
function hello(){
    console.log("Hello");
}
*/
// function expressions = a way to define functions as
//                        values or variables

//setTimeout(cancelIdleCallback, 3000) // After 3000 ms or 3 seconds

setTimeout(function(){
    console.log("Hello"),
}, 3000)

////////////////////////////////////////////////////////////
/*
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(square);

console.log(squares);

function square(element){
    return Math.pow(element, 2);
}*/

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element){ // With this method there's no need 
    return Math.pow(element, 2);               // to declare a function name now
});
const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
})
const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
})
const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
})
const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
})

console.log(total)

// 1. Callbacks in asynchronous operations
// 2. Higher-Order Functions
// 3. Closures
// 4. Event Listeners
