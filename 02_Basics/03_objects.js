// CONSTRUCTOR
// SINGLETON

//Object.Create


//Onject literal

const mysym0 = Symbol("key2");


const JsUser = {
    name: "Abhay",
    "Full Name": "Abhay Kaushal",  //THIS CAN ONLY NE ACCESSED USING SQUARE BRACKET METHOD
    [mysym0]: "THIS IS A SYMBOL",
    age: 20,
    location:"India",
    email:"kaushalabhay122004@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday "]
}


//TWO METHODS OF ACCESSING OBJECTS
console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser["Full Name"]);


// SYMBOL

const mysym = Symbol("Key1")

const obj = {
    // mysym: "myKey1", THIS IS A WRONG WAY OF DECLARING A SYMBOL
    [mysym] : "myKey1",
}
console.log(obj);  
console.log(obj[mysym]);  


// FREEZING A OBJECT

Object.freeze(obj)  


// FUNCTIONS

JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(" ");

console.log(JsUser)
console.log(JsUser.greeting());
