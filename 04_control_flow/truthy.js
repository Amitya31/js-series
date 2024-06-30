const userEmail = [];
// if the string would be empty then it will become false 
// if there is empty array than it accepts it as true value
// if(userEmail) {
//     console.log("Got user email");
// }
// else {
//     console.log("Dont have user email")
// }

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}
// checking empty arrays
// if(userEmail.length !== 0){
//     console.log("array is not empty");
// }else { 
//     console.log("array is empty");
// }
// checking empty objects
// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
// }

// false == 0, false == '' , 0 == '' this all are true

// Nullish Coalesencing Operator (??): null undefined

let val1;
// val1 = 5??10

// it will print the first value

// val2 = null ?? 40
// console.log(val2);

// var1 = undefined ?? 40
var1 = null ?? 10 ?? 15
console.log(var1);

// ternary operator

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80")

