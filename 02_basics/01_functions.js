// declaration of function
function sayMyName(){
    // function definition
    console.log("amit")
}

//sayMyName()
// function execution

function addTwoNumbers(number1, number2){
    const result = number1+number2
    return result;
}

const number = addTwoNumbers(1, 2);
//console.log(number);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage(""))

// Rest operator
// "..." this is a rest operator
// it is used to pass multiple parameters without declaring in the functions

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200,400,500))
// passing an object inside the function
const user = {
    username: "amit",
    price: 99
}
// anyobject is used to pass any object in the function which is declared in the code
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`)
}

// handleObject(user);
handleObject({
    username: "suresh",
    price: 499
})

// accesing array or passing arrray using function
const myNewArray  = [200, 500 ,699 ,899]

function returnSecondValue(getArray){
    return getArray[1];
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400 ,500]))