// NodeList = Statc collection of HTML elements by (id, class, element)
//            Can be created ny using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

// ADD HTML/CSS PROPERTIES
/*
buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "😁";
});
*/

// CLICK event listener
/*
// When you click the button, the background color's going to change
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
});
*/

// MOUSEOVER + MOUSEOUT event listener
/*
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    });
});
*/

// ADD AN ELEMENT
/*
//STEP 1
const newButton = document.createElement("button");
//STEP 2
newButton.textContent = "Button 5";
newButton.classList = "myButtons"
//STEP 3
document.body.appendChild(newButton);

//console.log(buttons); // Button 5 not recognize in log

buttons = document.querySelectorAll(".myButtons");
console.log(buttons)
*/

// REMOVE AN ELEMENT

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        //console.log(buttons); // Those Buttons are gone, they still 4 in NodeList
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons); // Now we do it manually, the NodeList will be reduce too
    });
});