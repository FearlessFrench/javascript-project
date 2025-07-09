// Date objects = Objects that contain values that represent dates and times
//                These date objects can be changed and formatted

// Date(year, month, day, hour, minute, second, ms)
//const date = new Date(2025, 0, 1, 2, 3, 4, 5);
//const date = new Date("2024-01-02T12:00:00Z");
//const date = new Date(0);
//const date = new Date(1700000000000);

//console.log(date);

/*
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);
*/
/*
const date = new Date();

date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);

console.log(date);
*/

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1){
    console.log("HAPPY NEW YEAR!");
}