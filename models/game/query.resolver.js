'use strict';
import Game from './schema.js';
import redis from 'redis';
const subscriber = redis.createClient(); 
const publisher  = redis.createClient();

export default {
    Query: {
        getGame: (_, args) => {
            subscriber.on("message", (channel, message) => {
                console.log(`Received the following message from ${channel}: ${message}`);
            });
            
            subscriber.subscribe("userData");
            publisher.publish("userData", args.gameId);
            return Game.find({gameId: args.gameId});
        }
    }
};