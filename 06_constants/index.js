// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

//PI = 420.69; JavaScript will reject this change

/*
radius = window.prompt('Enter the radius of a circle');
radius = Number(radius);

circumference = 2 * pi * radius;
*/
//console.log(circumference);
document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}
