//1.Odd or Even
function checkOddEven(num){
  if(num%2 === 0){
    console.log("Even");
  }
  else{
    console.log("Odd");
  }
}
checkOddEven(6);      // Even

//2.Largest of 2 numbers
function largestofTwo(num1,num2){
  if(num1>num2){
    console.log(num1 +" is largest");
  }
  else{
    console.log(num2 +" is largest");
  }
}
largestofTwo(10,15);          //15 is largest

// 3. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));    //olleh

// 4. Count vowels
function countVowels(str) {
  let count = 0;
  let vowels = "aeiou";

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("janani"));   //3


    
