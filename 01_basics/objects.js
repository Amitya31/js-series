// singleton 
// when we declare objects in literals it doesn,t becomes singleton
// when objects are made using constructor it becomes singleton

// object literals
const mySym = Symbol("key1") // symbol declaration

const jsUser = {
    name: "amit",
    "full name": "amit yadav", 
    age: 18,
    [mySym]: "mykey1",  // declaring symbol in object by using square brackets
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
// Object.freeze(jsUser)
jsUser.email = "amit@microsoft.com"
console.log(jsUser.email);

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["full name"]}`); // `` is called string interpolation
}
// we use $ to print any variable from object 
// also to refrence the same object we use "this" 

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

