// 1. getElementById
let title = document.getElementById("title");

// 2. getElementsByClassName
let paragraphs = document.getElementsByClassName("text");

// 3. querySelector (first match)
let firstPara = document.querySelector(".text");

// 4. querySelectorAll (all matches)
let allParas = document.querySelectorAll(".text");

// Buttons
let changeTextBtn = document.getElementById("changeTextBtn");
let colorBtn = document.getElementById("colorBtn");
let showBtn = document.getElementById("showBtn");

// Box
let box = document.getElementById("box");


// 🔹 EVENT 1: Change title text
changeTextBtn.addEventListener("click", function () {
  title.innerText = "Title Changed!";
});


// 🔹 EVENT 2: Change color of all paragraphs
colorBtn.addEventListener("click", function () {
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
  }
});


// 🔹 EVENT 3: Show input text
showBtn.addEventListener("click", function () {
  let value = document.getElementById("inputBox").value;
  document.getElementById("output").innerText = value;
});


// 🔹 EVENT 4: Click box → change background
box.addEventListener("click", function () {
  box.style.backgroundColor = "yellow";
});
