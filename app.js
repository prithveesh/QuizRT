const bodyParser = require('body-parser');
const cors =  require('cors');
const mongoConn = require('./mongoConnection')();
const server = require('express')();
const config = require('./config.js');

// Setup bodyParsing middleware
server.use(bodyParser.json());

server.listen(config.SERVER_URI, () => {
	console.log(`server listen at ${config.SERVER_URI}`);
})