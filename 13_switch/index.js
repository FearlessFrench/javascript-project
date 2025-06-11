// SWITCH = can be an efficient replacement to many else if statements

/*
let day = 1;

if(day == 1){
    console.log(`It is Monday`);
}
else if(day == 2){
    console.log(`It is Tuesday`);
}
else if(day == 3){
    console.log(`It is Wednesday`);
}
else if(day == 4){
    console.log(`It is Thurssday`);
}
else if(day == 5){
    console.log(`It is Friday`);
}
else if(day == 6){
    console.log(`It is Saturday`);
}
else if(day == 7){
    console.log(`It is Sunday`);
}
else{
    console.log(`${day} is not a day`)
}
*/

// Use switch instead of using a lot of else if statements
/*
let day = 1;

switch(day){
    case 1:
        console.log("It is Monday"):
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a day`);
}
*/

let testScore = 85;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}

console.log(letterGrade);