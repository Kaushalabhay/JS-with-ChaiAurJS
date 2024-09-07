// USING FOR IN LOOPS FOR PRINTING OBJECTS

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// for (const key in myObject) {    // USING THIS METHOD WE ONLY GET KEYS OF THE OBJECT
//     console.log(key);
// }


// for (const key in myObject) {    // USING THIS METHOD WE ONLY GET VALUE OF OBJECT BUT NOT THE KEYS
//     console.log(myObject[key]);
// }


for (const key in myObject) {       // USING THIS METHOD WE CAN GET THE VALUE OF BOTH OBJECT-KEYS AND OBJECT-VALUE
    console.log(key ,"=>", myObject[key])
}console.log("");




// USING FOR IN LOOPS FOR PRINING ARRAYS

const programming = ["js" , "rb" , "py" , "java" , "cpp"]

// for (const key in programming) {
//     console.log(key)                 // USING THIS METHOD WE ONLY GET INDEX OF KEYS
// }console.log("");


for (const key in programming) {
    console.log(programming[key]) 
}console.log("");





// MAPS ARE NOT ITERABLE IN FOR IN LOOPS AND ALSO THEY DO NOT GIVE ANY ERROR

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , 'United States Of America')
// map.set('FR' , 'France')
// map.set('IN' , "India")    // THIS IS NOT MAPPED AS IT ALREADY EXISTS


// for (const key in map) {
//     console.log(key);
// }

