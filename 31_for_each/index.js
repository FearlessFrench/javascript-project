// forEach() = method used to iterate over the elements
//             of an array and apply a specified function (callback)
//             to each element

//             array.forEach(callback)
//             element, index. array are provided

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(square)
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}

function display(element){
    console.log(element);
}

////////////////////////////////////////////////////////////

//let fruits = ["apple", "orange", "banana", "coconut"];
let fruits = ["APPLE", "ORANGE", "BANANA", "COCONUT"];

//fruits.forEach(upperCase);
fruits.forEach(lowerCase)
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase()
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}