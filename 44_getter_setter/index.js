// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }

    get width(){
        //return this._width;
        return `${this._width.toFixed(1)} cm`;
    }

    get height(){
        //return this._height;
        return `${this._height.toFixed(1)} cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)} cm²`;
    }
}

const rectangle = new Rectangle(3, 4);

console.width = -1000000; // ❌ Width must be a positive number
console.height = "pizza"; // ❌ Height must be positive number 

console.log(rectangle.width); // 3  // 3.0 cm
console.log(rectangle.height); // 4  // 4.0 cm
console.log(rectangle.area); // 12  // 12.0 cm²

////////////////////////////////////////////////////////////

class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a non-negative number");
        }
    }

    get firstName(){
        return this._firstName; 
    }

    get lastName(){
        return this._lastName;
    }

    get fullName(){
        return this._fistName + " " + this._lastName;
    }

    get age(){
        return this._age; 
    }
}

//const person = new Person(420, 69, "pizza");

console.log(person.firstName);  // ❌ First name must be a non-empty string
console.log(person.lastName);   // ❌ Last name must be a non-empty string
console.log(person.age);        // ❌ Age must be a non-negative number

const person = new Person("Claire", "Redfield", 19);

console.log(person.firstName);  // Claire
console.log(person.lastName);   // Redfield
console.log(person.fullName);   // Claire Redfield
console.log(person.age);        // 19