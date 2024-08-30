// const tinderUser = new Object()   //SINGLETON OBJECT (EMPTY OBJECT)
const tinderUser = {}    // NON SINGLETON OBJECT (EMPTY OBJECT)


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


console.log(tinderUser);
console.log("");
 

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName:{
            firstName:"abhay",
            lastName:"kaushal"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName);
console.log(regularUser.fullName.userFullName.firstName);



// COMBINING OF OBJECTS

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

// const obj3 = {obj1 , obj2}   // THIS IS NOT A GOOD WAY OF COMBINING TWO OBJECTS
// console.log(obj3); //const obj3: {obj1: { 1: string; 2: string;} ; obj2 {3: string;4: string};}


// COMBINING USING ASSIGN

const obj3 = Object.assign(obj1 , obj2);
console.log(obj3);
console.log("");

const obj4 = Object.assign({} , obj1 , obj2);
console.log(obj4);
console.log("");



// COMBINING USING SPREAD (... )

const obj5 = {...obj1 , ...obj2}
console.log(obj5);
console.log("");


// OBJECTS OF A ARRAY

const users = [
    {
        name:"abhay"
    },
    {
        name:"adi"
    },
    {
        name:"anshul"
    }
]

console.log(users[0].name);
console.log(users[1].name);
console.log(users[2].name);
console.log("");


//TO GET EITHER KEYS OF A OBJECT OR VALUES OF A OBJECT

const personalData = {
    Firstname:"Abhay",
    Secondname:"kaushal",
    id:2205112,
    email:"kaushalabhay122004@gmail.com"
}

console.log(Object.keys(personalData))      // RETURNS ONLY KEYS OF A GIVEN OBJECT
console.log(Object.values(personalData))    // RETURNS ONLY VALUES OF A GIVEN OBJECT
console.log(Object.entries(personalData))   // RETURNS ENTRIES OF A GIVEN OBJECT AS EACH ARRAY
