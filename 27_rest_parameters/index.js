// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments by bundling them into an array

//                   spread = expands an array into seperate elements
//                   rest = bundles seperate elements into an array

function openFridge(...foods){
    console.log(foods);
}
function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

//openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);

// ----- Method -----

function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

function getAverage(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length
}

const total = sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
const total = getAverage(75, 100, 85, 90, 50);

console.log(`Your total is $${total}`)
console.log(total);

// ----- Combine String Together -----

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineString("Mr.", "Arthur", "Morgan", "II")

console.log(fullName);