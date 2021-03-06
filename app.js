
import bodyParser from 'body-parser';
import express from 'express';
import GraphqlHTTP from 'express-graphql';
import swaggerUi from 'swagger-ui-express';
import session from 'express-session';

import db from './utils/db';
import Schema from './models';

const redisStore = require('connect-redis')(session);
const config = require('./config.js');
const swaggerDocument = require('./swagger.json');
import { publishGlobalEvents, subscribeGlobalEvents } from './utils/pub-sub';

const app = express();
// Setup bodyParsing middleware
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/graphql', GraphqlHTTP({
	schema: Schema,
	pretty: true,
	graphiql: true
}));

app.get('/', (req, res) => {
	subscribeGlobalEvents('GAME_START', (subEvent) => {
		subEvent.on("message", (channel, message) => {
				console.log('aaaaaaa', message);
		});	
	});
	res.send('Hello, I am up and running');
});

db(`${config.MONGO.PROTOCOL}${config.MONGO.DOMAIN}${config.MONGO.PORT}${config.MONGO.BUCKET}`, function(err){
	if(err){
		console.log("Unable to connect to mongoDB....");
	}else{
		app.listen(config.PORT, () => {
			console.log(`server listen at ${config.PORT}`);
		});
	}
});