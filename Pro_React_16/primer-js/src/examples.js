console.log("Hello");
console.log("Apple");
console.log("This is a statement");
console.log("this is also a staatment");

//Defining and using Functions
const myFunc = function() {
    console.log("This statement is inside the function");
}
console.log("This statement is outnside the function");

myFunc();

function myFunc(name, weather) {
    console.log(`Hello ${name}`);
    console.log(`It is ${weather} today :)`);
}

myFunc("Adam", "Sunny")


function myFunc(name, weather, ...extraArgs) {
    console.log(`Hello ${name}`);
    console.log(`It is ${weather} today :)`);
    for(let i = 0; i < extraArgs.length; i++) {
        console.log("Extra Arg: " + extraArgs[i]);
    }
}

myFunc("Adam", "Sunny", 1,23,4,5,56,6)

function myFunc(name) {
    return `Hello ${name}`
}

console.log(myFunc("waliston"));










