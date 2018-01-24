'use strict';
import Game from './schema.js';

export default {
    Query: {
        getGameById: (_, args) => {
            return Game.find({gameId: args.gameId});
        }
    }
};