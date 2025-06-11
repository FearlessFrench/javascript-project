// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.

function happyBirthday(username, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old`);
}

// You can call the function multiple times
happyBirthday();
happyBirthday();
happyBirthday();
happyBirthday();

// We can send a value within a function called Arguments
happyBirthday("Mitsuha", 21);
happyBirthday("Taki", 21);
happyBirthday("Arthur", 37)

////////////////////////////////////////////////////////////

function add(x, y){
    let result = x + y;
    return result;
}

let answer = add(2, 3);
console.log(answer);

// Shorter version
function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}
function isEven(number){

    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
function is_Even(number){
    return number % 2 === 0 ? true : false;
}
function isValidEmail(email){

    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }

}
function is_ValidEmail(email){

    return email.includes("@") ? true : false;
}

console.log(divide(2, 3))
console.log(isEven(12));
console.log(is_Even(14));
console.log(isValidEmail("claire_redfield@gmail.com"))

