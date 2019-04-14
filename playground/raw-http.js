const https = require('https');

const url = `https://api.darksky.net/forecast/ca4ad3b014fc0e938e23bfd16642edcc/40,-75`;

const request = https.request(url, response => {
  let data = '';

  response.on('data', (chunk) => {
    data += chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', error => {
  console.log(error);
});

request.end();
