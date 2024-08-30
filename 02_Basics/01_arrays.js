const myArr = [0 , 1 , 2 , 3 , 4 , 5]
console.log("myArr = " , myArr);

const myHeros = [ " powerRAnger" , "superman"];
console.log("myHeros = " , myHeros);

const myArr2 = new Array(0 , 1 , 2 , 3 , 4);
console.log("myArr2 = " , myArr2);



// SOME METHODS ON ARRAYS
myArr.push(6)
console.log(myArr);

myArr.push(7)
console.log(myArr);

myArr.push(9)
console.log(myArr);


myArr.pop()
console.log(myArr);


myArr.unshift(7)
console.log(myArr);


myArr.shift()
console.log(myArr);



const newArr = myArr2.join()
console.log(myArr2);
console.log(newArr);


console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
console.log(myArr.indexOf(31));


console.log("");
console.log("");
console.log("");

// SLICE AND SPILCE

console.log("ORIGINAL ARRAY" , myArr);
console.log("");

const myN1 = myArr.slice(1,3)

console.log("SLICED CONTENT",myN1)
console.log("");

console.log("ARRAY AFTER SLICE" , myArr);
console.log("");


const myN2 = myArr.splice(1,3)

console.log("SPLICED CONTENT",myN2)
console.log("");

console.log("ARRAY AFTER SPLICE" , myArr);
console.log("");