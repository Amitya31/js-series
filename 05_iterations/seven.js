const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNumbers.map( (num) => num + 10 );
//console.log(newNums);

// Chaining

const newNums = myNumbers.map( (num) => num * 10 ).map( (num) => num/10 )
.filter( (num) => num>5 )
console.log(newNums)