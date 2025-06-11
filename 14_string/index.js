// string methods = allow you to manipulate and work with text (strings)

let userName = "フレンチ";
/*
console.log(userName.charAt(0)) // フ
console.log(userName.indexOf("ン")); // index 2
console.log(userName.length); // 4 characters

userName = useName.toUpperCase();
userName = useName.toLowerCase();
*/

//let result = userName.startsWith(" ");
//let result = userName.endsWith(" ");
/*
let result = userName.includes(" ");

if(result){
    console.log("Your username can't include ' '");
}
else{
    console.log(userName);
}*/

let phoneNumber = "123-456-7890"

phoneNumber = phoneNumber.replaceAll("-", ""); // 1234567890
phoneNumber = phoneNumber.padStart(15, "0"); // 000123-456-7890

console.log(phoneNumber);


