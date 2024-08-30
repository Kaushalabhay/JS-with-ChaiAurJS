const accountId = 122553
let accountEmail ="kaushalabhay@gmail.com"
var accountPassword = "12345"
accountCity ="Jaipur" //FROM HERE WE CAN GET TO KNOW THAT VARIABLES CAN ALSO BE DECLARED WITHOUT USING ANY LET,VAROR CONST , ALTHOUGH IT IS NOT A GOOD PRACTICE TO PERFORM

let accountState;  //UNDEFINED VALUE AS NO VALUE IS DECLARED 

// accountId = 2 // NOT ALLOWED AS VARIABLE IS DECLARED AS CONSTANT VARIABLE

accountEmail = "hc@hc.com" //REDECLARING VALUE
accountPassword = "21212121"  //REDECLARING VALUE
accountCity = "Bengaluru"  //REDECLARING VALUE

console.log(accountId);

/*
PREFER NOT TO USE VAR 
BECAUSE OF ISSUE IN BLOCK SCOPE AND FUNCTIONAL SCOPE
*/

console.table([accountId , accountEmail , accountPassword , accountCity]) //THIS RETURNS VALUES IN FORM OF A TABLE