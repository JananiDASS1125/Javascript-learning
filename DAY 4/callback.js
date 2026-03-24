// CALLBACKS

// basic callback example
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function done() {
  console.log("Task completed");
}

greet("Janani", done);


// callback with delay
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 2000);
}

fetchData(() => {
  console.log("Use the data");
});


// event callback example (for browser)
 document.getElementById("btn").addEventListener("click", function () {
   console.log("Button clicked");
 });
