const request = require("request");
const yargs = require("yargs");

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

var encodedAddress = encodeURIComponent(argv.address);

request(
  {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBWZYjPanQutUdTYO-HJJ2Z6azxjrzxkzg`,
    json: true
  },
  (error, response, body) => {
    if (error) console.log("unable to connect to server");
    else if (body.status === "ZERO_RESULTS")
      console.log("Can not locate the place");
    else if (body.status === "OK") {
      console.log(`Location: ${body.results[0].formatted_address}`);
      console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
      console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
  }
);
