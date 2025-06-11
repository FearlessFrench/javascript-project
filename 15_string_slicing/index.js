// string slicing = creating a substring
//                  from a portion of another string

//                  sting.slice(start, end)
/*
const fullName = "Mitsuha Miyamizu";

//let firstName = fullName.slice(0, 3);
//let lastName = fullName.slice(4, 8);

//let firstChar = fullName.slice(0, 1); 
//let lastChar = fullName.slice(-4) // ench

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
*/

const email = "claire_redfield@gmail.com";

let username = email.slice(0, email.indexOf("@")); // claire_redfield
let extension = email.slice(email.indexOf("@")); // @gmail.com

console.log(username);
console.log(extension);