const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${user.username} , welcome to website`);  // FOR THE SPECIFIC VARIBALE
        console.log(`${this.username} , welcome to website`);  //FOR CURRENT CONTEXT VARIABLE SCOPE
        // console.log(`${username} , welcome to website`); // NOT DEFINED
        console.log(this);
    }
}

user.welcomeMessage();
user.username = "ABHAY";
user.welcomeMessage();
 