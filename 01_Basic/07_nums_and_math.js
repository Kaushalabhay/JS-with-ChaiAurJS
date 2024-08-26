const score = 400
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(5));

const hunderds = 1000000
console.log(hunderds.toLocaleString());         // US STANDARD
console.log(hunderds.toLocaleString('en-IN'));  // INDIAN STANDARD

console.log("");


// **************************** MATHS ***************************

console.log(Math);          /// A OBJECT
console.log(Math.abs(-242));        // GIVES POSITIVE VALUE
console.log(Math.round(4.3));    // GIVES ROUND-OFF VALUE
console.log(Math.round(10.6));       // GIVES ROUND-OFF VALUE
console.log(Math.ceil(4.1));         // GIVES MAX ROUND-OFF VALUE
console.log(Math.ceil(4.9));        // GIVES MAX ROUND-OFF VALUE
console.log(Math.floor(4.9));       // GIVES MIN ROUND-OFF VALUE
console.log(Math.min(4,3,7,9,21)); //GIVES MIN VALUE
console.log(Math.max(4,3,7,9,21)); //GIVES MAX VALUE


console.log("")

///////////// RANDOM /////////////

console.log(Math.random());     // ALWAYS BETWEEN 0 AMD 1 AND EVERYTHIME CHANGES VALUE WHEN RUNNED

// when we need value between 0 to 10

console.log(Math.random() * 10);


// when we need value between 1 to 10

console.log((Math.random() * 10) + 1);



// WHEN ,  min = 10 AND max = 20.

const max = 20;
const min = 10;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
