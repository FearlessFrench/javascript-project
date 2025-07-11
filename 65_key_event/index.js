// eventListener = Listen for specific events to create interactive web pages
//                 events: keydown, keyup, keypress (try avoid it, incompatible with most browsers)
//                 document.addEventListener(event, callback);

const mYBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    myBox.textContent = "😲";
    myBox.style.backgroundColor = "tomato";
})

document.addEventListener("keyup", event => {
    myBox.textContent = "😃";
    myBox.style.backgroundColor = "lightblue";
})

document.addEventListener("keydown", event => {

    if(event.key.startsWith("Arrow")){

        event.preventDefault()

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight";:
                x += moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});