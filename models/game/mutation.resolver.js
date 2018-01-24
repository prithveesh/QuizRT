'use strict';
import { v4 } from 'uuid';
import Game from './schema.js';

import redis from 'redis';
const subscriber = redis.createClient(); 


export default {
    Mutation: {
        createGame: (_, args) => {
            subscriber.subscribe(pubSubEventKeys.USER_INFO);
            return Game.create({
                gameId: v4(),
                status: args.status,
                topicId: args.topicId,
                questions: args.questions,
                result: args.result,
                players: args.players
            });
        }
    }
};