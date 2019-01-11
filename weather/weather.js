const request = require("request");
var getWeather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/006483873dfe87c789f333f717fe6294/${lat},${lng}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      } else {
        console.log("bad request");
      }
    }
  );
};
module.exports = {
  getWeather
};
