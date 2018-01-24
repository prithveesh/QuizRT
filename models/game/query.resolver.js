'use strict';
import Game from './schema.js';
import {subscriber, publishGlobalEvents, subscribeGlobalEvents} from '../../utils/pub-sub';

export default {
    Query: {
        getGame: (_, args) => {
            subscribeGlobalEvents('USER_INFO', (subEvent) => {
                subEvent.on("message", (channel, message) => {
                    console.log(`Received the following message from ${channel}: ${message}`);
                });
            });
            publishGlobalEvents('USER_INFO', args.gameId);
            return Game.find({gameId: args.gameId});
        }
    }
};