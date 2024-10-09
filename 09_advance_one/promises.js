// How to make a promise
// const promiseOne = new Promise();

                  //  OR  //

// const promiseOne = new Promise((resolve, reject) => {
//     
// })

                  //  OR  //

// const promiseOne = new Promise(function(resolve, reject) {
    
// })





            // HOW TO CONNECT resolve WITH .then FUNCTION
const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve(); //THIS CONNECTS THE this FUNCTION, WITHOUT thisFUNCTION WILL NOT WORK
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
})




            // PROMISE TWO //
            // ANOTHER METHOD TO CONNECT resolve WITH .then FUNCTION(without storing the promise in any variable)
new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})






            // PROMISE THREE //
            // THEREFORE THIS FUNCTION REPRESENTS THAT IF WE PASS ANY FUNCTION THEN .then CATCHES THAT ACTION 
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "Chai", email: "kaushalabhay@emample.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user)
})




                // PROMISE FOUR //
// FOR DATABASE CONNECTION
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if (!error) { // Error = False
            resolve({username: "Abhay", password: "123"})   
        } else {
            reject("ERROR: Something went wrong ");
        }
    }, 1000);
})

promiseFour
.then((user) => {        // THIS WILL RUN ONLY WHEN ERROR WILL BE FALSE 
    console.log(user);
    // console.log(user.username);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {     // THIS WILL RUN ONLY WHEN ERROR WILL BE TRUE 
    console.log(error);
})
.finally(() => {        // Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected).
    console.log('The promise is either resolved or rejected');      //  The resolved value cannot be modified from the callback.
})





                // PROMISE FIVE //
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if (!error) { // Error = False
            resolve({username: "Javascript", password: "123"})   
        } else {
            reject("ERROR: JS went wrong ");
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()