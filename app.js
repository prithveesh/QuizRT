import bodyParser from 'body-parser';
import cors from 'cors';
const mongoConn = require('./mongoConnection')();
import express from 'express';
const swaggerUi = require('swagger-ui-express');

const server = express();
const config = require('./config.js');
const swaggerDocument = require('./swagger.json');

// Setup bodyParsing middleware
server.use(bodyParser.json());
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

server.listen(config.SERVER_URI, () => {
	console.log(`server listen at ${config.SERVER_URI}`);
})