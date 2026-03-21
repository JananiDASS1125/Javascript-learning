// FUNCTIONS

// normal function
function add(a, b) { 
  return a + b;
}

// arrow function
const multiply = (a, b) => a * b;

console.log(add(2, 3));  //5
console.log(multiply(2, 3));  //6

// default parameter
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();  //Hello Guest
greet("Janani");  //Hello Janani
