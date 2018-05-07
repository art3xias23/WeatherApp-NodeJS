const yargs = require('yargs');

const temperature = require('./temperature/temp');

const geocode = require('./geocode/geocode');
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

    geocode.geocodeAddress(argv.address, (errorMessage, results) => {
      if (errorMessage) {
        console.log(errorMessage);
         }
        else {
          temperature.findTemperature(results, (errorMessage, result) =>
        {
          if (errorMessage)
          {
            console.log(errorMessage);
          }
          else {
            console.log(result);
          }
        });
      }
    });
