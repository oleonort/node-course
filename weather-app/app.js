const { geoCode } = require('./utils/geocode');
const { forecast } = require('./utils/forecast');

const getForecast = location => {
  if (!location) {
    console.log('Please provide the location');
    return;
  }

  geoCode(location, (error, data) => {
    if (error) console.log(error);

    const { latitude, longitude, location } = data;

    forecast(latitude, longitude, (error, forecast) => {
      if (error) console.log(error);

      console.log(`The weather in ${location} - ${forecast}`);
    })
  });
};

getForecast(process.argv[2]);
