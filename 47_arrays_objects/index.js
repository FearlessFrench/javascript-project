const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];

fruits.push({name: "grapes", color: "purple", calories: 62});
//fruits.pop(); to remove the last object
//fruits.splice(1, 2); to remove specific objects by index

console.log(fruits);

// ---------- forEach() ----------
fruits.forEach(fruit => console.log(fruit.calories));

// ---------- map() ---------- return a new array
const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

// ---------- filter() ---------- return a new array if condition is 
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

console.log(yellowFruits);

// ---------- reduce() ---------- return a single value (object)
const maxFruit = fruits.reduce((max, fruit) => 
                                fruit.calories > max.calories ?
                                fruit : max);

const minFruit = fruits.reduce((min, fruit) =>
                                fruit.calories < min.calories ?
                                fruit : min);

console.log(maxFruit); // {name: 'coconut', color: 'white', calories: 159}
console.log(minFruit);