const yargs = require('yargs');
const axios = require('axios');

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


  var userSearchLocation = encodeURIComponent(argv.address);



var geocodeURL=`https://maps.googleapis.com/maps/api/geocode/json?address=${userSearchLocation}`

axios.get(geocodeURL).then(function(response)
{
console.log(response.data);
}).catch((errorMessage) =>
{
  console.log(errorMessage);
});
