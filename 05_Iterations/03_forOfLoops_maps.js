// LOOPS FOR ARRAY SPECIFICALLY

// FOR OF LOOP
// for (const element of object) {
    
// }

const arr = [1 , 2 , 3 , 4 , 5];
for (const num of arr) {
    console.log(num)
}
console.log("");




// FOR OF LOOP ON STRING
const greetings = "Hello World";
for (const greet of greetings) {
    console.log(` Each char is ${greet}`)
}
console.log("");



// USING CONTINUE IN FOR OF LOOP ON STRING 
const string = "Hello World";
for (const str of string) {
    if(str == " "){
        continue;    // SKIP SPACE
    }
    console.log(` Each char is ${str}`)
}
console.log("");





// MAPS (ONLY STORES UNIQUE VALUES)

const map = new Map()
map.set('IN' , "India")
map.set('USA' , 'United States Of America')
map.set('FR' , 'France')
map.set('IN' , "India")    // THIS IS NOT MAPPED AS IT ALREADY EXISTS

console.log(map);
console.log("");



// USING FOR OF LOOP TO PRINT MAP

for (const [Key , Value] of map) {
    console.log(Key , '=>' , Value);
}
console.log("");



//OBJECTS ARE NOT ITTERATEABLE IN FOR OF LOOPS
 
// const myObject = {
//     game1: "football",
//     game2: "cricket"
// }

// for (const [key , value] of myObject) {
//     console.log(key , '=>' , value);
// }

// for (const element of myObject) {            // OBJECTS ARE NOT ITERABLE USING FOR OF LOOP
//     console.log(element); 
// }