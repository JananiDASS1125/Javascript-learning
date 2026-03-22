// ARRAYS BASICS

let numbers = [10, 20, 30, 40];

// access
console.log(numbers[0]); // 10

// modify
numbers[1] = 25;
console.log(numbers); //[10,25,30,40]

// add elements
numbers.push(50); // end  
numbers.unshift(5); // beginning    

console.log(numbers);      // [5,10,25,30,40,50]

// remove elements
numbers.pop(); // remove last
numbers.shift(); // remove first

console.log(numbers);      //[10,25,30,40
