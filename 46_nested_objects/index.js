// nested objects = Objects inside of other Objects.
//                  Allows you to represent more complex data structures
//                  Child Object is enclosed by a Parent Object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

const person = {
    fullName: "Mitsuha Miyamizu",
    age: 15,
    isStudent: true,
    hobbies: ["singing", "body-swapping", "cooking"],
    address: {
        street: "54 Itomodori Street",
        city: "Itomodori"
        country: "Japan"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);

console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.hobbies[2]);

// Nested Object use property accessor twice like this
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);

////////////////////////////////////////////////////////////

const person = {
    fullName: "Mitsuha Miyamizu",
    age: 15,
    isStudent: true,
    hobbies: ["singing", "body-swapping", "cooking"],
    address: {
        street: "54 Itomodori Street",
        city: "Itomodori"
        country: "Japan"
    }
}

for(const property in person.address){
    console.log(person.address[property]);
}

////////////////////////////////////////////////////////////

// A class that utilize nested object
// Parent Object
class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

// Child Object
class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Claire", 19, "2 Fu St.",
                                         "Raccoon City",
                                         "United States");
const person2 = new Person("Chris", 24, "2 Fu St.",
                                        "Raccoon City",
                                        "United States");
const person3 = new Person("Leon", 20, "69 Kennedy St.",
                                        "Philadelphia",
                                        "United States");

console.log(person3.address.street)
console.log(person3.address.city)
console.log(person3.address.country)