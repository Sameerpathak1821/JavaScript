// Dates

let myDate = new Date()
console.log(myDate);
// now our task is to make it more readable.
console.log(myDate.toString());
console.log(myDate.toLocaleDateString()); //10/28/2023 => mm/dd/yy.

console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());

console.log(typeof myDate); // Date is an object

let myCreatedDate = new Date ("2023-01-23");
console.log(myCreatedDate.toLocaleDateString());

// time stamps in javaScript.

let myTimeStamp = Date.now() // Date.now 1 jan 1970 se abhi tak ka time miliseconds mai dega.


console.log(myTimeStamp); //give time in miliseconds.


//time in seconds.

console.log(Math.round(Date.now()/1000));




