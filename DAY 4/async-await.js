// ASYNC / AWAIT

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

// basic async/await
async function getData() {
  let result = await fetchData();
  console.log(result);
}

getData();


// async with error handling
function riskyTask() {
  return new Promise((resolve, reject) => {
    reject("Something went wrong");
  });
}

async function handleTask() {
  try {
    let result = await riskyTask();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

handleTask();
