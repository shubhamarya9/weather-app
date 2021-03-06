const yargs = require("yargs");
const axios = require("axios");
const command = process.argv[2];
const home = require("./home");
if (command === "home") {
  home.homeWeather();
}
const argv = yargs
  .option({
    a: {
      describe: "address of the place",
      string: true,
      alias: "address"
    }
  })
  .help().argv;
var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBWZYjPanQutUdTYO-HJJ2Z6azxjrzxkzg`;

axios
  .get(geocodeUrl)
  .then(response => {
    if (response.data === "ZERO_RESULTS") console.log("bad request");
    console.log(response.data.results[0].formatted_address);
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/006483873dfe87c789f333f717fe6294/${lat},${lng}`;
    return axios.get(weatherUrl);
  })
  .then(response => {
    var temperature =
      Math.round((((response.data.currently.temperature - 32) * 5) / 9) * 100) /
      100;
    var apparenTemperature =
      Math.round(
        (((response.data.currently.apparentTemperature - 32) * 5) / 9) * 100
      ) / 100;
    var summary = response.data.hourly.summary;
    console.log(
      `The temperature is ${temperature} and it feels like ${apparenTemperature} and it will be ${summary}`
    );
  });
