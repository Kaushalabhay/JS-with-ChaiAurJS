const name = "Abhay" // NORMAL WAY OF DECLARING A STRING (AAM ZINDAGI)
const age = 20

console.log("BY NORMAL WAY OF CONCATINATION")
console.log("My name is: " + name + " and My age is : " + age)  // NORMAL WAY OF CONCATINATING STRINGS ,NUMBERS AND VARIABLES.

console.log("")
console.log("")

console.log("CONCATINATION BY CURRENT VERSION OF STRINGS")
console.log(`Hello my name is ${name} and my age is ${age}`)   // BACKTIKS METHOD


console.log("")

const gameName = new String('abhaykaushal') // NEW means we are using objects of js
console.log(gameName)
console.log(gameName[0])
console.log(gameName[1])
console.log(gameName[2])

console.log("")

console.log(gameName.length);           //LENGHT OF VARIABLE
console.log(gameName.toUpperCase());    // UPPERCASE LETTERS OF VARIABLE

console.log("")

console.log(gameName.charAt(4));  // CHARACTER AT INDEX 4
console.log(gameName.indexOf('l'))// INDEX OF CHARARACTER

console.log("")

console.log(gameName.substring(0,9)) // CUTS SUBSTRING FROM A STRING
console.log(gameName.slice(-9,9))    // SAME AS SUBSTRING BUT WE CAN ALSO ADD NEGATIVE NUMBERS 

console.log("")

const newStringOne = "         abhay  ";
console.log(newStringOne);
console.log(newStringOne.trim());   // removes whitespace from both ends of this string and returns a new string, without modifying the original string

console.log("")

const url = "https://abhay.com/kaushal%20abhay";
console.log(url.replace('%20' , '-'))
console.log(url.includes('/kau'))