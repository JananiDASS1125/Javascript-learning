//1. Double numbers using map
let numbers=[1,2,3,4];
let result=numbers.map((n)=> n*2);
console.log(result);   //[2,4,6,8]

// 2. Get odd numbers using filter
let nums=[10,11,12,13];
let res=nums.filter((x)=> x%2 != 0 );
console.log(res);    //[11,13]

// 3. Find sum using reduce
let nums=[2,3,5];
let ans=nums.reduce((acc,curr)=> acc+curr ,0);
console.log(ans);     //10

// 4. Array of objects
let users = [
  { name: "A", age: 20 },
  { name: "B", age: 25 }
];

// get all names
let names = users.map((u) => u.name);
console.log(names);

// get users age > 21
let filteredUsers = users.filter((u) => u.age > 21);
console.log(filteredUsers);
