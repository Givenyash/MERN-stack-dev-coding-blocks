function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function goodbye() {
  console.log("goodbye");
}
// greet("Shivam",goodbye);


console.log("Download started");

setTimeout(() => {
  console.log("Download Completed");
}, 4000);

console.log("Show Data");

let count = 0;
const intervalId = setInterval(() => {
  console.log("Execution");
  count++;
  if (count >= 5) {
    clearInterval(intervalId);
  }
}, 1000);