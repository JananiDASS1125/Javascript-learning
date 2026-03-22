// OBJECTS BASICS - KEY-VALUE PAIRS

let person = {
  name: "Janani",
  age: 21,
  isStudent: true
};

// access
console.log(person.name);  // Janani
console.log(person["age"]);  //21

// modify
person.age = 22;

// add new property
person.city = "Chennai";

// delete property
delete person.isStudent;

console.log(person);   //{ name: 'Janani', age: 22, city: 'Chennai' }
