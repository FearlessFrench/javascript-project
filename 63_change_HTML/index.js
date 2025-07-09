// ---------- EXAMPLE 3 <li> ----------

// STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";


// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newLink);
// document.body.prepend(newLink);
// document.getElemenById("fruits").append(newListItem);
// document.getElemenById("fruits").prepend(newListItem);

// const box4 = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

// const boxes = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[4]);

// REMOVE HTML ELEMENT
// document.body.removeChild(newLink);
// document.getElementById("box1").removeChild(newLink);