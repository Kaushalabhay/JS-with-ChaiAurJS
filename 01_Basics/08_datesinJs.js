// Dates

let myDate = new Date();

console.log(typeof myDate);
console.log("");

console.log("DATE USING NO FUNCTION : ",myDate);
console.log("");
console.log("DATE USING FUNCTION toString() : ",myDate.toString());
console.log("");
console.log("DATE USING FUNCTION toDateString() : ",myDate.toDateString());
console.log("");
console.log("DATE USING FUNCTION toISOString() : ",myDate.toISOString());
console.log("");
console.log("DATE USING FUNCTION toJSON() : ",myDate.toJSON());
console.log("");
console.log("DATE USING FUNCTION toLocaleDateString() : ",myDate.toLocaleDateString());
console.log("");
console.log("DATE USING FUNCTION toLocaleString() : ",myDate.toLocaleString());
console.log("");
console.log("DATE USING FUNCTION toLocaleTimeString(): ",myDate.toLocaleTimeString());
console.log("");
console.log("DATE USING FUNCTION toTimeString(): ",myDate.toTimeString());
console.log("");
console.log("DATE USING FUNCTION toUTCString() : ",myDate.toUTCString());
console.log("");
console.log("");

let myCreatedDate = new Date(2024 , 8 , 23);  //   TO KNOW WHICH DAY WAS AT THE GIVEN DATE
// let myCreatedDate = new Date(2024 , 8 , 23 , 5 , 3);  //   TO KNOW WHICH DAY WAS AT THE GIVEN DATE
// let myCreatedDate = new Date("2024-8-23");  //   TO KNOW WHICH DAY WAS AT THE GIVEN DATE
// let myCreatedDate = new Date("01-14-2023");  //   TO KNOW WHICH DAY WAS AT THE GIVEN DATE

console.log(myCreatedDate.toDateString());  

let myTimeStamp = Date.now(); // TIMES IN MILISECOND
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));



////////// OTHER METHODS WHICH WE GET WITH DATE ARE //////////

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes());
console.log(newDate.getMonth());
console.log(newDate.getSeconds());
console.log(newDate.getTime());


