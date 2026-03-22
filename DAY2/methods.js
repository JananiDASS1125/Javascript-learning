// ARRAY METHODS: map, filter, reduce

let nums = [1, 2, 3, 4];

// map → double values
let doubled = nums.map((n) => n * 2);
console.log(doubled); // [2,4,6,8]

// filter → even numbers
let even = nums.filter((n) => n % 2 === 0);
console.log(even); // [2,4]

// reduce → sum
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
