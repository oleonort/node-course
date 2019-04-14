const request = require('request');

const geoCode = (address, callback) => {
  const geoAPIkey = 'pk.eyJ1Ijoib2xlb25vcnQiLCJhIjoiY2p1aGEzM2x6MHYxNzQxb2FieXNtMGg2ZCJ9.eqjesGIxLFOp669ltaaBAg';
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${geoAPIkey}`;

  request( { url, json: true }, (error, { body: { features } }) => {
    if (error) {
      callback('Unable to connect to location services!', null);
    } else if (features.length === 0 ) {
      callback('Unable to find location', null);
    } else {
      callback(null, {
        latitude: features[0].center[1],
        longitude: features[0].center[0],
        location: features[0].place_name
      });
    }
  });
};

module.exports = {
  geoCode
};

