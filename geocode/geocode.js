const request = require('request');

var geocodeAddress =(address, callback) => {
  var userSearchLocation = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${userSearchLocation}`,
    json: true
  },
    (error, response, body) => {
  if (error)
  {
    callback('Unable to connect to Google servers')
  }
  else if(body.status === 'ZERO_RESULTS')
  {
    callback('No Results were returned');
  }
  else if(body.status==='OK')
  {
    callback(undefined, {
      address: body.results[0].formatted_address,
      latitude: body.results[0].geometry.location.lat,
      longitude: body.results[0].geometry.location.lng

  });

  }

  // console.log(JSON.stringify(body, undefined, -1));
  })

};

module.exports.geocodeAddress = geocodeAddress;
