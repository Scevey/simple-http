const fs = require('fs');

const spongegar = fs.readFileSync('./client/spongegar.png');
const getImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(spongegar);
  response.end();
};

module.exports.spongegar = spongegar;
module.exports.getImage = getImage;
