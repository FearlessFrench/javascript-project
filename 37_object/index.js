// object = A collection of related properties and/or methods
//          Can represent real world objects (people, products, places)
//          object = {key:value,
//                    function()}

const person1 = {
    firstName: "Claire"
    lastName: "Redfield",
    age: 19
    isEmployed: false,
    sayHello: function(){console.log("Hi! I'm Claire.")}
    fight: function(){console.log("I am fighting to survive!")},
}

const person2 = {
    firstName: "Leon",
    lastName: "Kennedy",
    age: 21
    isEmployed: true,
    sayHello: () => {console.log("Hi. I'm Leon. Leon Kennedy")}
    fight: () => console.log("I am fight criminals, thiefs, and zombies")
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person1.fight();
person2.fight()