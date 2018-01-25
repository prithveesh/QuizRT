'use strict';
import { v4 } from 'uuid';
import Game from './schema.js';
import { publishGlobalEvents, subscribeGlobalEvents } from '../../utils/pub-sub';

export default {
    Mutation: {
        createGame: (_, args) => {
            return Game.create({
                gameId: v4(),
                status: args.status,
                topicId: args.topicId,
                questions: args.questions,
                result: args.result,
                players: args.players
            }, (err, gameData) => {
                if(err) {
                    console.log(err);
                    return false;
                }
                subscribeGlobalEvents('CREATE_GAME', (subEvent) => {
                    subEvent.on("message", (channel, message) => {
                        console.log(`Received the following message from ${channel}: ${message}`);
                    });
                });
                publishGlobalEvents('CREATE_GAME', JSON.stringify(gameData));
            });
        }
    }
};