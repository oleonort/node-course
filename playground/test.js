const fs = require('fs');

const jsonData = fs.readFileSync('./data.json').toString();
const data = JSON.parse(jsonData);

data.name = "Artur";
data.age = 28;

fs.writeFileSync('data.json', JSON.stringify(data));
