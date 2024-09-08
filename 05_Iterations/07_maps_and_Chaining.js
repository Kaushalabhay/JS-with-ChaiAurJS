const myNums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

// const newNums = myNums.map( (num) => num + 10)
// console.log(newNums);
// console.log("");





//         CHAINING
// IN THIS METHOD OF CHAINING WE CAN PERFORM VARIOUS FUNCTION IN ONE-GO
// OR IN SERIES USING EITHER NUMBER OF map() or filter() OR BOTH TOGETHER.

const newNums = myNums.map( (num) => num + 10)    // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
                      .map( (numbers) => numbers * 10)   // [ 110, 120, 130, 140, 150, 160, 170, 180, 190, 200 ] // THIS TELLS US THAT WE CAN ALSO USE DIFFERENT CALLBACK NAME IN A CALLBACK FUNCTION
                      .map( (num) => num / 2)     // [  55, 60, 65, 70,  75, 80, 85, 90, 95, 100 ]
                      .filter( (number) => number > 70)   //  [ 75, 80, 85, 90, 95, 100 ]
console.log(newNums);