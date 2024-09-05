// TRUTHY VALUES

// "0" , 'false' , " " , [] , {} ,  function(){}

const userEmail = "kaushal@gmail.com"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}console.log("");

const userEmail1 = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}console.log("");

// FALSY VALUES
//  false , 0 , -0 , BigInt 0n , "" , null ,NaN , undefined


const userEmail2 = ""

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}console.log("");


 