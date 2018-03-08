``
const request = require('request');
const yargs = require('yargs');
const query = require('querystring');
const argv = yargs
    .options({
      a:{
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
      },
    })
    .help()
    .alias('help', 'h')
    .argv;

console.log(encodeURIComponent(argv.a));
var userSearchLocation = encodeURIComponent(argv.a);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${userSearchLocation}`,
  json: true
},
  (error, response, body) => {
if (error)
{
console.log('Unable to connect to Google servers');
}
else if(body.status === 'ZERO_RESULTS')
{
  console.log('No Results were returned');
}
else if(body.status==='OK')
{
    var location = body.results[0].geometry.location;

      console.log(`Address: ${JSON.stringify(location,undefined , 2)}`);
  console.log(`Latitude: ${location.lat}`);
  console.log(`Longitude: ${location.lng}`);
}

// console.log(JSON.stringify(body, undefined, 2));
});
