``
const request = require('request');
const weather = require('weather-js');
var leedsWeather;

weather.find({search: 'Leeds, UK', degreeType: 'C'}, function(err, result) {if(err) console.log(err);
leedsWeather = JSON.stringify(result, null, 2);
})

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lambard%20street%20Philadelphia',
  json: true
},

  (error, response, body) => {
    var location = body.results[0].geometry.location;
  console.log(`Address: ${JSON.stringify(body.results[0].geometry.location,undefined , 2)}`);
  console.log(`Latitude: ${location.lat}`);
  console.log(`Longitude: ${location.lng}`);
  console.log(`Leeds: ${leedsWeather}`);

// console.log(JSON.stringify(body, undefined, 2));
});
