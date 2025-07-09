// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ---------- .firstElementChild ----------
/*
const element = document.getElementById("desserts");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";
*/
/*
const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
})*/

// ---------- .lastElementChild ----------
/*
const element = document.getElementById("desserts");
const lastChild = element.lastElementChild;
lastChild.computedStyleMap.backgroundColor = "yellow";
*/
/*
const ulElements = document.querySelectorAll("ul");

ulElements.for Each(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow";
});*/

/*
// ---------- .nextElementSibling ----------

const element = document.getElementById("fruits");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";

// ---------- .previousElementSibling ----------

const element = document.getElementById("desserts");
const prevSibling = element.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";

// ---------- .parentElement ----------

const element = document.getElementById("ice cream");
const parent = element.parentElement;
parent.style.backgroundColor = "yellow";
*/

// ---------- .children ----------

const element = document.getElementById("desserts");
const children = element.children;
/*
Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
});*/
children[1].style.backgroundColor = "yellow";