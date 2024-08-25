// STACK (PRIMITIVE MEMORY)
// COPY OF VARIABLE IS SEND

/* EXAMPLE */
let firstVariable = "Abhay kaushal";   // ORIGINAL VARIABLE
console.log(firstVariable)

let secondVariable = firstVariable;       // COPY OF ORIGINAL VARIABLE
console.log(secondVariable);

secondVariable = "updatedValue";    // UPDATION IN SECOND VARIABLE AND WE COME TO KNOW THAT ORIGINAL VALUE IS STILL SAME THAT IS FRIST-VARIABLE'S VALUE IS NOT EFFECTED AS COPY OF VARIABLE WAS PASSED BUT NOT THE ORIGINAL VALUE
console.log(secondVariable);





// HEAP (NON-PRIMITIVE MEMORY)
// DIRECT REFERENCE TO THE MEMORY LOCATION

/* EXAMPLE */

let userOne = {                        // ORIGINAL VARIABLE (OBJECT)
    email: "kaushalabhay@gmail.com",
    upi: "abhay@sbi"
}
console.log(userOne)

let userTwo = userOne;                 // REFERENCE TO ORIGINAL VARIABLE
console.log(userTwo)

userTwo.email = "newEmail@gmail.com"; 
console.log(userOne , userTwo);     // WE CAN SEE THAT BOTH ORIGINAL AND REFERECE TO ORIGINAL DATA VARIABLE GETS CHANGES AFTER WE UPDATE VARIBALE NON-ORIGINAL VARIABLE