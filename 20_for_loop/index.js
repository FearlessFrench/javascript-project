// for loop = repeat some code a LIMITED amount of times

// print Hello three times
for(let i = 0, i <= 2; i++){ 
    console.log("Hello")
}

// New Year countdown
for(let i = 10; i > 0; i-=1){
    console.log(i);
}
console.log("HAPPY NEW YEAR!")

// Use continue to skip some iteration like skip 13 -> 11, 12, 14, 15, 16
for(let i = 1; i <= 20; i++){
    
    if(i == 13){
        continue;
    }
    else{
        console.log(i);
    }
}