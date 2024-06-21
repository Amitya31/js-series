// const tinderUser = new Object()
// this is a singleton object
// it uses constructor as well

const tinderuser = {}

tinderuser.id = "12334abc";
tinderuser.name = "Sammy";
tinderuser.isLoggedin = "false";

//console.log(tinderuser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "amit",
            lastname: "yadav"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)