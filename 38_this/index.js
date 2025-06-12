// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

const person1 = {
    name: "Mitsuha",
    favFood: "Ice cream",
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

const person1 = {
    name: "Taki",
    favFood: "Ramen",
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.eat();
person2.eat();


////////////////////////////////////////////////////////////

//console.log(this)