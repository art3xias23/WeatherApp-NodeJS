const request = require('request');
const url = 'https://api.darksky.net/forecast/6ce72039c47addbe7e6eb57373dd6e75/37.8267,-122.4233';
console.log('Starting')
request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data)
})
console.log('Stopping')