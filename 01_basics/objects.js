// singleton 
// when we declare objects in literals it doesn,t becomes singleton
// when objects are made using constructor it becomes singleton

// object literals
const mySym = Symbol("key1") // symbol declaration

const jsUser = {
    name: "amit",
    "full name": "amit yadav", 
    age: 18,
    [mySym]: "mykey1",  // declaring symbol in object
    location: "mumbai",
    email: "amit@gmail.com",
    isLoggedin: "False",
    lastLoginDays: ["Monday", "Friday"]
}

// object declaration
// key: values

// accessing object
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"])
console.log(jsUser[mySym]) 

jsUser.email = "amit@google.com"
Object.freeze(jsUser)
jsUser.email = "amit@microsoft.com"
console.log(jsUser.email);