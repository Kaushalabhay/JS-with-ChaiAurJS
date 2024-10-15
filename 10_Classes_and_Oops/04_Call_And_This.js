function SetUserName(username) {
    //Complex DB calls
    this.username = username
}

function CreateUser(username , email , password) {
    SetUserName.call(this , username); //WE HERE PASS (THIS) SO THAT setUserName FUNCTION USES (THIS) WHICH IS PASSED AS ARGUMENT
                                       // FROM (THIS) WE ARE GETTING THE CURRENT CONTEXT
    this.email = email;
    this.password = password;
}

const chai = new CreateUser("Abhay", "kaushal@gmail.com", 123)
console.log(chai);
