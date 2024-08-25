// IN A CASE WHERE STRING IS JUST A SIMPLE NUMBER 
console.log("IN A CASE WHERE STRING IS JUST A SIMPLE NUMBER ");

let number1 = "23";

console.log(typeof number1);  // STRING
console.log(typeof(number1)); // STRING

let valueInNumber1 = Number(number1);  

console.log(typeof valueInNumber1)  // NUMBER

console.log("");
console.log("");



// IN A CASE WHERE STRING IS NOT JUST SIMPLE NUMBER 
console.log("IN A CASE WHERE STRING IS NOT JUST SIMPLE NUMBER ");

let number2 = "23ABC";

console.log(typeof number2);  // STRING
console.log(typeof(number2)); // STRING

let valueInNumber2 = Number(number2);  

console.log(typeof valueInNumber2)  // NUMBER

console.log(valueInNumber2); // OUTPUT => NOT A NUMBER

console.log("");
console.log("");


// IN CASE NUMBER IS NULL
console.log("IN CASE NUMBER IS NULL");

let number3 = null;

console.log(typeof number3);  // OBJECT
console.log(typeof(number3)); // OBJECT

let valueInNumber3 = Number(number3);  

console.log(typeof valueInNumber3)  // NUMBER

console.log(valueInNumber3); // OUTPUT => 0

console.log("");
console.log("");


// IN CASE NUMBER IS undefined
console.log("IN CASE NUMBER IS undefined");

let number4 = undefined;

console.log(typeof number4);  // UNDEFINED
console.log(typeof(number4)); // UNDEFINED

let valueInNumber4 = Number(number4);  

console.log(typeof valueInNumber4)  // NUMBER

console.log(valueInNumber4); // OUTPUT => NOT A NUMBER
 
console.log("");
console.log("");


// IN CASE NUMBER IS TRUE(BOOLEAN)
console.log("IN CASE NUMBER IS TRUE(BOOLEAN)");

let number5 = true;

console.log(typeof number5);  // BOOLEAN
console.log(typeof(number5)); // BOOLEAN

let valueInNumber5 = Number(number5);  

console.log(typeof valueInNumber5)  // NUMBER

console.log(valueInNumber5); // OUTPUT => 1

console.log("");
console.log(""); 


// IN CASE NUMBER IS FALSE(BOOLEAN)
console.log(" IN CASE NUMBER IS FALSE(BOOLEAN)");

let number6 = false;

console.log(typeof number6);  // BOOLEAN
console.log(typeof(number6)); // BOOLEAN

let valueInNumber6 = Number(number6);  

console.log(typeof valueInNumber6)  // NUMBER

console.log(valueInNumber6); // OUTPUT => 0

console.log("");
console.log("");

 
// ******************************* OPERATIONS ************************************* //

let value = 3;
let negValue = -value;

console.log(negValue);

// console.log(2+2);    ADDITION
// console.log(2-2);    SUBSTRACTION
// console.log(2*2);    MULTIPLICATION
// console.log(2**3);   POWER
// console.log(3/2);    DIVISION
// console.log(3%2);    MODULUS


let str1 = "hello"
let str2 = " Abhay"

let str3 = str1 + str2 ;
console.log(str3);

console.log();
console.log();

console.log("1" + 2);   //12
console.log(1 + "2");   //12
console.log(1 + "2" + "2")  //122
console.log(1 + "2" + 2)    //122
console.log(1 + 2 + "2")    // 32
console.log("1" + "2" + 2)  //122
console.log("1" + 2 + 2)    //122

console.log();
console.log();

console.log(true);      // true
console.log(+true);     // 1
console.log(+" ");      // 0

console.log();
console.log();

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);