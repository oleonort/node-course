const request = require('request');

const url = 'https://api.darksky.net/forecast/ca4ad3b014fc0e938e23bfd16642edcc/37.8267,-122.4233';

request( { url, json: true }, (error, response) => {
  const { temperature, precipProbability } = response.body.currently;
  const { summary } = response.body.daily.data[0];
  console.log(`${summary} It is currently ${temperature} degrees out. There is ${precipProbability} chance of rain`)
});
