// **************** COMPARISON ******************* //

// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log("")

console.log(null > 0);    // THE REASON IS THAT AN EQUALITY CHECK == AND COMPARISON > ,
console.log(null == 0);   // < , >= , <= WORK DIFFERENTLY
console.log(null >= 0);   // COMPARISON CONVERT NULL TO A NUMBER , TREATING IT AS 0.
console.log(null <= 0);   // THAT'S WHY (3) >= IS TRUE AND (1) NULL > 0 IS FALSE.

console.log("")

console.log(true == 1);
console.log(true >= 1);
console.log(true <= 1);
console.log(true > 1);

console.log("")

console.log(false == 1);
console.log(false >= 1);
console.log(false <= 1);
console.log(false > 1);

console.log("");

console.log("2" == 2);      // TRUE
console.log("2" === 2);     // FALSE BECAUSE IT ALSO CHECK DATA TYPE