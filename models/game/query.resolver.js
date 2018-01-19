'use strict';
import Game from './schema.js';

export default {
    Query: {
        getGame: (_, args) => {
            return Game.findOne({where: {gameId: args.gameId}});
        }
    }
};