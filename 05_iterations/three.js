const myObject = {
    JS : 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
// printing object using for in loop
for (const key in myObject) {
    console.log(`${key} is the short form for ${myObject[key]}`);
}

// in for in loop when you print array by inputing keys as you did in for of loop
// instead of printing the values of the array it prints the keys of arrays i.e indeices of array
// for printing values the syntax is "array_name[key]"
const arr = ["js", "cpp", "swift", "java", "rust"]

for (const key in arr) {
    console.log(arr[key])
}

// map is not iteratable hence for in loop is not possible

