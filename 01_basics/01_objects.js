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

//console.log(regularUser.fullname.userfullname.firstname)

// Merging two objects

const obj1 = {1: "a", 2: "b"} // first object
const obj2 = {3: "a", 4: "b"}// second object
// syntax Object.assign(target, source, source)
// it acts as array when we use 
//const obj3 = Object.assign({}, obj1 , obj2)
//console.log(obj3);

// most frequently used way to merge objects is
const obj3 = {...obj1,...obj2} // spreading and combine
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@gmail.com",
    },
    {
        id:2,
        email: "b@gmail.com"
    },
]

// this is syntax of array of object
// the database sends data in this format

// to access this data

console.log(users[1].email);
console.log(Object.keys(tinderuser)); // prints all the keys in array format
console.log(Object.values(tinderuser)); // prints all the values
console.log(tinderuser.hasOwnProperty('isLoggedin'));




