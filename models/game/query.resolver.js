'use strict';
import Game from './schema.js';
import { publishGlobalEvents, subscribeGlobalEvents } from '../../utils/pub-sub';

export default {
    Query: {
        getGameById: (_, args) => {
            return Game.find({gameId: args.gameId}, (err, game) => {
                if(err) {
                    console.log(err);
                    return false;
                }
                subscribeGlobalEvents('GAME_START', (subEvent) => {
                    subEvent.on("message", (channel, message) => {
                        console.log(`Received the following message from ${channel}: ${message}`);
                    });
                });
                publishGlobalEvents('GAME_START', JSON.stringify(game));
            });
        }
    }
};