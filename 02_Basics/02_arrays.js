//  PUSH

const marvel_heros = ["Ironman" , "Thor" , "Spiderman"];
const dc_heros = ["Superman" , "Flash" , "Batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); //  [ 'Ironman', 'Thor', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log("");

// console.log(marvel_heros[3][1])
// console.log("");
// console.log("");

// CONCATINATION

// const allHeros = marvel_heros.concat(dc_heros); 
// console.log(allHeros);     //  [ 'Ironman', 'Thor', 'Spiderman', 'Superman', 'Flash', 'Batman' ]
// console.log("");


// SPREAD(...)

const all_new_heros = [...marvel_heros , ...dc_heros];
console.log(all_new_heros);


// FLAT

const another_array = [1 , 2 , 3 , [ 4 , 5 ] , 6 , 7 ,[ 8 , [9 , 10]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array)


//  IsArray

console.log(Array.isArray("Abhay"))


// From 

console.log(Array.from("HITESH"))


// OF

let score1 = 100;
let score2 = 200; 
let score3 = 300;

console.log(Array.of(score1 , score2 , score3))
