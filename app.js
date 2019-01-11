const request = require("request");
const yargs = require("yargs");
const geocode = require("./geocode/geocode");

const argv = yargs
  .option({
    a: {
      describe: "Address for fetching the weather report",
      string: true,
      demand: true,
      alias: "address"
    }
  })
  .help()
  .alias("help", "h").argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});
