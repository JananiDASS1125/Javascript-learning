// PROMISES

// basic promise
let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));


// promise with delay
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received after 2 seconds");
    }, 2000);
  });
}

fetchData().then((data) => console.log(data));
