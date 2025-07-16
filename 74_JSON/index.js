// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3]

//        JSON.stringify() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object

/*
const jsonNames = `["Anri", "Miki", "Kingo", "Reiko"]`;
const jsonPerson = `{"name": "Anri", "age": 25, "isEmployed": true, "hobbies": ["Singing", "Dancing", "Reading"]}`;
const jsonPeople = `[{"name": "Anri", "age": 25,"isEmployed": true,"hobbies": ["Singing", "Dancing", "Reading"]},
                {"name": "Miki", "age": 30, "isEmployed": false, "hobbies": ["Singing", "Cooking", "Traveling"]},
                { "name": "Kingo", "age": 28, "isEmployed": true, "hobbies": ["Singing", "Gaming", "Photography"]},
                { "name": "Reiko", "age": 22, "isEmployed": false, "hobbies": ["Singing", "Drawing", "Writing"]}]`;

const parsedData = JSON.parse(jsonNames);
const parsedData = JSON.parse(jsonPerson);
const parsedData = JSON.parse(jsonPeople);
console.log(parsedData);*/

fetch("person.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.isEmployed)));
    //.catch(error => console.error(error))

