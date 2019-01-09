console.log("Starting app");
setTimeout(() => {
  console.log("inside callback");
}, 2000);
setTimeout(() => {
  console.log("second callback");
}, 0);

console.log("Finishing up ");
