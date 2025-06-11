// arithmetic operators = operands (values, variables, etc.)
//                        operators (+ - * /)
//                        ex. 11 = x + 5;

let students = 30;

//students = students + 1;
//students = students - 1
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//students = students ** 3;
//let extraStudents = students % 2;

//students += 3;
//students -= 2;
//students *= 2;
//students /= 3;
//students **= 2;
//students %= 2;

//students++;
//students--;


//console.log(students);
//console.log(extraStudents);

////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & module
    4. addition & subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2; // There are no parenthesis () to calculate
//let result = 1 + 2 * 3 + 16; // Calculate exponents
//let result = 1 + 6 + 16; // Calculate multiplication & division & module
//let result = 23 // Addition & Subtraction

// How about this equation
let result = 12 % 5 + 8 / 2;
//let result = 2 + 8 / 2
//let result = 2 + 4
//let result = 6

// Here's a challenge equation
let result = 6 / 2 ** (2 + 5);
//let result = 6 / 2 ** 7;
//let result = 6 / 128;
//let result = 0.046875;

console.log(result);

