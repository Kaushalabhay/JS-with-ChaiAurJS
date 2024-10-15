// IN THIS CODE WE ARE STUDING ABOUT THE INHERITANCE FEATURE AND
// HOW IT HELPS TO GET THE EXACT LENGHT OF A STRING WITHOUT CALCULATING THE LENGTH OF THE SPACES IN THE STRING.


let myName = "hitesh     ";
let mychannel = "chai     ";

console.log(myName.length);     // This length method gives the length of spaces in the string ALSO.
console.log("");


// MODERN METHOD (Inheritance).
let anotherUserName = "kaushalAbHaY      ";

String.prototype.trueLength = function (){      // HERE WE DIRECTLY INJECT PROPERTY(trueLength) IN
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User