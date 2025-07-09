// sort() = method used to sort elements of an array in place
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

//let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

//fruits.sort();
//numbers.sort();
numbers.sort((a, b) => a - b); // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.sort((a, b) => b - a); // (10) [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

console.log(fruits);

////////////////////////////////////////////////////////////

const people = [{name: "John", age: 30, gpa: 3.0},
                {name: "Arthur", age: 37, gpa: 1.5},
                {name: "Hosea", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}]
                
people.sort((a, b) => a.age - b.age);
people.sort((a, b) => b.age - a.age);

people.sort((a, b) => a.gpa - b.gpa);
people.sort((a, b) => b.gpa - a.gpa);

people.sort((a, b) => a.name - b.name);

people.sort((a, b) => a.name.localeCompare(b.name));
people.sort((a, b) => b.name.localeCompare(a.name));
