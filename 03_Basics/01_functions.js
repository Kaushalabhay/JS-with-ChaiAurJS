function sayMyName() {
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("Y");
}

sayMyName();
console.log();
sayMyName;


// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3 , 4);
// addTwoNumbers(3 , "4");
// addTwoNumbers(3 , "a");
// addTwoNumbers(7 , null);
// console.log("");


// TOPIC => RETURN IN FUNCTION

function addTwoNumbers(number1 , number2){ 
//    let result = number1 + number2
//    return result;
//    console.log("ABHAY");  // NOTHING IS EXECUTED AFTER THE RETURN STATEMENT OF A FUNCTION
  
   // ANOTHER METHOD OF RETURNING 
   return number1 + number2;
} 

const result = addTwoNumbers(101324 , 34534);
console.log("Result = ", result);


// UNDEFINED IS RETURNED IF NOTHING IS PASSED AS ARGUMENT

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Abhay"));  //Abhay just logged in
console.log(loginUserMessage());  //undefined just logged in
console.log(loginUserMessage(""));  //    just logged in
console.log(" "); 