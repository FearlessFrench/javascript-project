// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         Used for interacting with APIs to retrieve and send
//         data asynchronously over the web

//         fetch(url, {method: "GET"}) [Default for get some data]
//         fetch(url, {method: "GET"}) [Default for get some data]
//         fetch(url, {method: "POST"}) [Send some data]
//         fetch(url, {method: "PUT"}) [Replace some data]
//         fetch(url, {method: "DELETE"}) [Remove some data]

// # HTTP response status codes
// HTTP response status codes indicate whether a specific
// HTTP requests has been successfully completed. 
// Responses are grouped in five classes:
// 1. Informational responses ( 100 - 199 )
// 2. Successful responses ( 200 - 299 )
// 3. Redirection messages ( 300 - 399 )
// 4. Client error responses ( 400 - 499 )
// 5. Server error responses ( 500 - 599 )
/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => console.log(response)) // to see responses
    .catch(error => console.error(error))
*/
// API URL: https://pokeapi.co

/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error))
*/

// Async function


async function fetchData(){

    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase()
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}