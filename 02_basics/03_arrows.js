// "this" keyword tells about the current context or refers to the current context
const user = {
    username: "amit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);

    }
}

// user.welcomeMessage()
// user.username = "sam" // here sam is the context
// user.welcomeMessage()

// arrow function

// function chai(){
//     username="hitesh"
//     console.log(this);
// }

// chai()

// const chai = function(){
//     username = "hitesh";
//     console.log(this);
// }

const chai = () => {
    username = "hitesh"
    console.log(this)
}

// chai();

const addTwo = (a,b) => {
    return a + b;
}

console.log(addTwo(4,4))

// implicit return

const multiplyTwo = (a,b) => a*b
console.log(multiplyTwo(4,6));