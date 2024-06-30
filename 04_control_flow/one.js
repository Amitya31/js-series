//if

const temprature = 41

// if( temprature === 41 ){
//     console.log("temparture less than 50")
// } else {
//     console.log("temprature is above 50")
// }



// < , < , <=, >=, ==,!=,
//=== , !== is used for type checking

const balance = 1000;

//if(balance > 500) console.log("test"),console.log("test");

// if(balance< 500) {
//     console.log("less than 500")
// } else if(balance==500){
//     console.log("equal to 500")
// } else {
//     console.log("Greater than 500");
// }

const isUserLoggedin = true;
const debitCard = temprature
const loggedInFromGoogle = false;
const loggedInFromGmail = true;
// multiple condition checking
if (isUserLoggedin && debitCard) {
    console.log("Allow to buy course")
}

if(loggedInFromGmail || loggedInFromGoogle){
    console.log("User Logged in");
}
    
