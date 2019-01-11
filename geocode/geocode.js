const request = require("request");

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);
  request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBWZYjPanQutUdTYO-HJJ2Z6azxjrzxkzg`,
      json: true
    },
    (error, response, body) => {
      if (error) callback("unable to connect to server");
      else if (body.status === "ZERO_RESULTS")
        callback("Can not locate the place");
      else if (body.status === "OK") {
        callback(undefined, {
          address: body.results[0].formatted_address,
          lattitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    }
  );
};
module.exports = {
  geocodeAddress
};
