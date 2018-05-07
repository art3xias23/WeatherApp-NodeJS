    const request = require('request');
    var findTemperature=(result, callback) =>
    {


    request({
        url: `https://api.darksky.net/forecast/28485c297166e543f14f690b405c20b9/${result.longitude},${result.latitude}`,
        json: true},
        (error, response, body) =>
        {
          if (!error && response.statusCode == 200)
          {
            temperature: body.currently;
            callback('Leeds temperature: ' + body.currently.temperature);
          }
          else
          {
            callback('There has been an error with the request');
          }
        });
}
        module.exports.findTemperature = findTemperature;
