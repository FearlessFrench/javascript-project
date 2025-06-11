// while loop = repeat some code WHILE some condition is true

let username = "";

while(username === "" || username === null){   // While this conditions is true
    console.log(`You didn't enter your name`); // Execute this line of code
}

// Another way for while loop (do the code first, then while loops)
do{
    username = window.prompt(`Enter your name`);
}while(username === "" || username === null)

console.log(`Hello ${username}`);

// Another example
let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}

// to check if we are logged in at the end
do{
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}while(!loggedIn)