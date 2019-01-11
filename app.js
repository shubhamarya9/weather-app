const request = require("request");
const yargs = require("yargs");
const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

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
    console.log(results.address);
    weather.getWeather(
      results.lattitude,
      results.longitude,
      (errorMessage, weatherResults) => {
        if (errorMessage) {
          console.log(errorMessage);
        } else {
          console.log(
            `it is currently ${weatherResults.temperature} and feels like ${
              weatherResults.apparentTemperature
            }`
          );
        }
      }
    );
  }
});
