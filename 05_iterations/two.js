// all these loops in this code are mostly array specific and object specfic loops
// for of loop

// ["", "", ""] array of strings
// [{}, {}, {}] array of objects

const g = [1, 2, 3, 4]

for (const nums of g) {
    if( nums == 2) {
        continue;
    }
    console.log(nums);
}
const greetings = "Namaste!"

for (const greet of greetings) {
    if(greet == "!"){
        continue;
    }
    console.log(`Each char is ${greet}`)
}

// Maps it is similar to array
// it contains unique values

const map = new Map() // map is an object. It stores data in the form of key value pairs and all the values are unique
map.set('IN', 'INDIA')
map.set('FR','FRANCE')
map.set('USA','United states of america')
map.set('IN','INDIA')
// it only stores unique value so it will print only one time map.set('IN', 'INDIA')
//console.log(map)

for (const [key,value] of map) {
    console.log(key,':-',value)
}

// we need to destructure the array "[key , value]" to print the values otherwise it will only print keys

// object is not iteratable using for of loop

