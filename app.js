const bodyParser = require('body-parser');
const cors =  require('cors');
const mongoConn = require('./mongoConnection')();
const server = require('express')();
const swaggerUi = require('swagger-ui-express');

const config = require('./config.js');
const swaggerDocument = require('./swagger.json');

// Setup bodyParsing middleware
server.use(bodyParser.json());
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

server.listen(config.SERVER_URI, () => {
	console.log(`server listen at ${config.SERVER_URI}`);
})