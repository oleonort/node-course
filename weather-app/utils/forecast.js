const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/ca4ad3b014fc0e938e23bfd16642edcc/${latitude},${longitude}`;

  request( { url, json: true }, (error, { body: { currently, daily } }) => {
    if (error) {
      callback('Unable to connect to forecast services!', null);
    } else if (daily.data.length === 0 ) {
      callback('Unable to find forecast', null);
    } else {
      const { temperature, precipProbability } = currently;
      const { summary } = daily.data[0];

      callback(
        null,
        `${summary} It is currently ${temperature} degrees out. There is ${precipProbability} chance of rain`
      );
    }
  });
};

module.exports = {
  forecast
};
