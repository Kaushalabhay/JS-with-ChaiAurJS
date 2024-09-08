const coding = ["js" , "rb" , "py" , "java" , "cpp"]



// ANYKIND OF FUNCTION ARE USED FOR ForEach LOOPS
// coding.forEach( function name (val){
//     console.log(val);
// })
// console.log("");


// coding.forEach( function (val){
//     console.log(val);
// })
// console.log("");


// coding.forEach( (item) => { console.log(item); })
// console.log("");


// coding.forEach( name = (item) => { console.log(item); })
// console.log("");




// // WE CAN ALSO USE FUNCTIONS IN THIS WAY 
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)  // WE HAVE TO ONLY GIVE REFERENCE OF A FUNCTION



          
// WE DO NOT HAVE ONLY SINGLE PARAMETERS BUT CAN BE MORE
// coding.forEach( (item , index , array) => {
//     console.log(item , index , array);
// } )






// ACCESS OF OBJECTS IN ARRAYS

const myCoding = [
    {
        languageName: "javaScript",
        languagefilename: "js",
    },
    {
        languageName: "java",
        languagefilename: "java",
    },
    {
        languageName: "python",
        languagefilename: "py",
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item);
})