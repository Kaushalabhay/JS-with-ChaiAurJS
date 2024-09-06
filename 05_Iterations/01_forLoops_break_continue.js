// FOR LOOP

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
     
} console.log("")


// CONDITION IN LOOPS

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best numrber")
    }
    console.log(element);
     
} 


// NESTED LOOP

for (let i = 0; i <= 5; i++) {
    console.log(`Outer loop with index = ${i}`);
     for (let j = 0; j <= 5; j++) {
         console.log(`Inner loop with index = ${j}`);
     }
} console.log("")



// ARRAY IN LOOPS

let myArray = ["flash" , "batman" , "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
} console.log("")





// BREAK

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("DETECTED 5");
        break;
    }
    console.log(`Value of i is ${i}`);
     
} console.log("")



// CONTINUE

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("DETECTED 5");
        continue;           // FOR A SINGLE TIME CODE WILL NOT RUN
    }
    console.log(`Value of i is ${i}`);
     
} console.log("")
 