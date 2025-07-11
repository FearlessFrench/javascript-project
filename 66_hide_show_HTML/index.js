
const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");
/*
myButton.addEventListener("click", event => {

    if(myImg.style.display === "none"){
        myImg.style.display = "block";
        myButton.textContent = "Hide";
    }
    else{
        myImg.style.display = "none"; // When clicked, it will hide the element
        myButton.textContent = "Show"; // When clicked again, it will show the element
    }
});
*/ 

// You can use either .visibility or .display depending on the project you creating

myButton.addEventListener("click", event => {

    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        myButton.textContent = "Hide";
    }
    else{
        myImg.style.visibility = "hidden"; // When clicked, it will hide the element
        myButton.textContent = "Show"; // When clicked again, it will show the element
    }
});