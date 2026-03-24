// PRACTICE PROBLEMS

// 1. Callback example
function process(callback) {
  console.log("Processing...");
  callback();
}

process(() => {
  console.log("Done!");
});


// 2. Promise example
function delayTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Completed after 1 second");
    }, 1000);
  });
}

delayTask().then((msg) => console.log(msg));


// 3. async/await example
async function runTask() {
  let msg = await delayTask();
  console.log(msg);
}

runTask();


// 4. Sequence task (Step 1 → Step 2 → Step 3)

function step(msg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, 1000);
  });
}

async function runSteps() {
  await step("Step 1");
  await step("Step 2");
  await step("Step 3");
}

runSteps();
