//  IF

// BOOLEAN
if(true){
    console.log("code will execute because condition is true")
}

if(false){
    console.log("code will not execute because condition is false");
}

// COMPARISON  ( < , > , <= , >= , == , != , ===(ALSO CHECKS TYPE IS EQUAL OR NOT) , !== )

if(2 == 2){ //true
    console.log("code will execute because condition(COMPARISON) is true")
}

const isUserloggedIn = true // ASSIGNING TRUE VALUE IN A VARIABLE
if(isUserloggedIn){
    console.log("code will execute because condition is true")
}


// IF - ELSE 

const temperature = 40;

if (temperature >= 50) {
    console.log("TEMPERATURE IS GREATER THAN 50")
} else {
    console.log("TEMPERATURE IS LESS THAN 50")
}
console.log(""); 


//  IMPLICITE SCOPE (EXECUTE IN ONLY ONE LINE)

const balance = 1000

if(balance > 500) console.log("test");
console.log(""); 


// ELSE-IF

if (balance < 500) {
    console.log("less than 500"); 
} else if(balance < 750){
    console.log("less than 500"); 
} else if(balance < 900){
    console.log("less than 900"); 
}else{
    console.log("less than 1200")
}
console.log(""); 
 

// && (AND STATEMENT)

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard && 44 == 44){
    console.log("Allow to buy course");
}


// ( OR STATEMENT)   ||

const loggedInFromGoogle = false
const loggedInFromEmail = true

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User LoggedIn");
}
console.log(""); 
