const request = require('request');


var geocodeAddress = (address) =>
{
return new Promise((resolve, reject) =>
{
  setTimeout(() =>
{


  var userSearchLocation = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${userSearchLocation}`,
    json: true
  },
    (error, response, body) => {
  if (error)
  {
    reject('Unable to connect to Google servers')
  }
  else if(body.status === 'ZERO_RESULTS')
  {
    reject('No Results were returned');
  }
  else if(body.status==='OK')
  {
    resolve( {
      address: body.results[0].formatted_address,
      longitude: body.results[0].geometry.location.lng,
      latitude: body.results[0].geometry.location.lat
  });

  }

  // console.log(JSON.stringify(body, undefined, -1));
});
})})};


geocodeAddress('Leeds').then((location) =>
{
console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) =>
{
  console.log(errorMessage);
})
