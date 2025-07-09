// element selectors = Methods used to target and manipulate HtML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// 1. document.getElementById()        // ELEMENT OR NULL
// 2. document.getElementsClassName()  // HTML COLLECTION
// 3. document.getElementsByTagName()  // HTML COLLECTION
// 4. document.querySelector()         // ELEMENT OR NULL
// 5. document.querySelectorAll()      // NODELIST

/*
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);
*/



/*
const fruits = document.getElementsByClassName("fruits");

//fruits[2].style.backgroundColor = "yellow";
//console.log(fruits);

//for(let fruit of fruits){
//    fruits.style.backgroundColor = "yellow";}

//fruits.forEach();

Array.from(fruits.forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
}));
*/



/*
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

//console.log(h4Elements)
//h4Elements[1].style.backgroundColor = "yellow";

for(let h4Element of h4Element){
    h4Element.style.backgroundColor = "yellow"
}

for(let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen"
}

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "yellow";
});

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
})
*/



//const element = document.querySelector("li");
//const element = document.querySelector("ol");
//const element = document.querySelector("h4");

//element.style.backgroundColor = "yellow";
//console.log(element);



const fruits = document.querySelectorAll(".fruits");

//fruits[4].style.backgroundColor = "yellow";
//console.log(foods);
foods.forEach(food => {
    food.style.backgroundColor = "yellow";
});