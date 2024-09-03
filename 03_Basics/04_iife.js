// IMMEDIATELY INVOKED FUNCTION EXPRESSION 

(function chai(){  // ALSO KNOWN AS NAMED IIFE
    console.log("DB connected");

})(/*FOR EXECUTION CALL*/) ;



// IF WE've TO WRITE 2 IIFE WE HAVE TO USE PARANTHESIS

( (name) => {
    console.log(`DB CONNNECTED TWO ${name}`);

}) ("ABHAY")