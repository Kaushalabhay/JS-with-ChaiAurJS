const user = {
    username: 'Abhay',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log('Got user details from database');
        console.log(`Username: ${user.username}`);
                    // OR //
        console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}


console.log(user.username);
console.log(user.getUserDetails());



            // CONSTRUCTORS //
console.log(' CONSTRUCTOR');
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

// const UserOne = User("Abhay", 20 , true);
// const UserTwo = User("ChaiAurCode", 11 , false);
// console.log(UserOne);  // FUNCTION WILL BE OVERWRITTEN AND IF WE CALL USERONE THEN ALSO WE'LL GET USERTWO VALUE


                // Use of New keyword //
const UserOne = new User("Abhay", 20 , true);
const UserTwo = new User("ChaiAurCode", 11 , false);
console.log(UserOne);
console.log(UserTwo);