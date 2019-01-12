var asyncAdd = (a, b) => {
  return new Promise((yes, no) => {
    if (typeof a === "number" && typeof b === "number") {
      yes(a + b);
    } else {
      no(`must be numbers`);
    }
  });
};
// var checkSuccess = new Promise((yes, no) => {
//   yes(` it worked`);
//   no(`it didn't`);
// });
// checkSuccess.then(
//   (message, errorMessage) => {
//     console.log(`Hurray, ${message}`);
//   },
//   errorMessage => {
//     console.log(`Sorry, ${errorMessage}`);
//   }
// );
asyncAdd(4, 5).then(
  message => {
    console.log(`the answer is ${message}`);
  },
  errorMessage => {
    console.log(`oh,no ${errorMessage};
    }`);
  }
);
