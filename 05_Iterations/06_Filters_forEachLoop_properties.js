// const coding = ["js" , "rb" , "py" , "java" , "cpp"]

// HERE BELOW WE DISCOVERED THAT IF WE WANT TO STORE THE FOR EACH LOOP
// IN A VARIBALE THEN IT IS NOT WORKING AND GIVING A OUTPUT OF UNDEFINED.
// const values = coding.forEach( (element) => {
//     // console.log(element);
//     return element
// })
// console.log(values);
// console.log("");



//                           FILTER   (Returns values)
const myNums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

// const newNums = myNums.filter( (num) => num > 4 )   // IF WE HAVE TO USE SCOPES OR PARANTHESIS {} , THEN WE HAVE TO USE RETURN STATEMENT
// console.log(newNums);
// console.log(""); 


// IN-CASE WE WANT TO USE ForEach LOOP 
// const newNums = []

// myNums.forEach( (nums) => {
//     if (nums > 4) {
//         newNums.push(nums)
//     }
// })
// console.log(newNums);
// console.log(""); 




// EXAMPLE THAT HOW FILTERS CAN BE USED
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBooks = books.filter ( (BK) => BK.genre === 'History' )
const userBooks = books.filter ( (BK) => BK.publish >= 1995 && BK.genre === 'History')
console.log(userBooks) 
console.log(""); 
