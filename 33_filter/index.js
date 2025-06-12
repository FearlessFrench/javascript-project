// .filter() = creates a new array by filtering
//             out elements

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

//console.log(evenNums); // [2, 4, 6]
console.log(oddNums); // [1, 3, 5, 7]

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

////////////////////////////////////////////////////////////

const age = [16, 17, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

console.log(adults);
console.log(children);

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18
}

////////////////////////////////////////////////////////////

const words = ["apple", "orange", "banana", "kiwi",
               "pomegranate", "coconut"];

const shortWords = words.filter(getShortWords);
console.log(shortWords);

function getShortWords(element){
    return element.length <= 6;
}


const longWords = words.filter(getLongWords)
console.log(longWords);

function getLongWords(element){
    return element.length > 6;
}