'use strict';
import Game from './schema.js';

export default {
    Query: {
        getGame: (_, args) => {
            return Game.find({gameId: args.gameId});
        }
    }
};