// selecting elements
let title = document.getElementById("title");
let input = document.getElementById("inputBox");
let btn = document.getElementById("btn");
let output = document.getElementById("output");
let colorBtn = document.getElementById("colorBtn");

// event 1: show input text
btn.addEventListener("click", function () {
  let value = input.value;
  output.innerText = value;
  title.innerText = "You typed:";
});

// event 2: change background color
colorBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightblue";
});
