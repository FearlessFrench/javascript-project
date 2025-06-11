// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

/*
let username;
username = window.prompt("What's your username?");
console.log(username);
*/

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}