// WHILE LOOPS

let index = 0; // WE SHOULD NOT TAKE CONST VARIBALE HERE BECAUSE THEN THE VALUE OF THAT VARIABLE IS NOT ALLOWDED TO BE CHANGED
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2  // OR index++ (This will incerement the value by one only)
}console.log("");

 


let myArray = ['flash' , 'batman' , 'superman' , 'ironman' , 'spiderman'];
let arr = 0;

while (arr < myArray.length){
    console.log(`Value of given array at index ${arr} is ${myArray}`);
    arr++;
}
console.log("");




// DO WHILE LOOP (The loop will iterate atleast a single time)


let score = 1
do {
   console.log(`Score is ${score}`);
   score++;
} while (score <= 10);
console.log("");




let score1 = 11
do {
   console.log(`Score is ${score1}`);
   score1++;
} while (score1 <= 10);