// variable scope = where a variable is recognized
//                  and accessible (local vs global)

// function can't see inside another function
//                  function2 don't know what x in function1 is...

let x = 3; // This is global variable - every function can see this

function function1(){
    let x = 1;
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}

// if we invoke function - the local variable will be use first
function1() // 1 (local scope)
function2() // 2 (local scope)