// var (avoid using)
var a = 10;
var a = 20; // redeclaration allowed

// let
let age = 21;
age = 22; // can update

// const
const pi = 3.14;
// pi = 3.141; // error

{              //block scoped
  let age=25;
  const pi=3.14;
  console.log("Inside block:" , age,pi);
}


console.log( "Outside Block:" ,a, age, pi);
