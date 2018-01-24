'use strict';
import Game from './schema.js';
import {subscriber, publishGlobalEvents, subscribeGlobalEvents} from '../../utils/pub-sub';

export default {
    Query: {
        getGameById: (_, args) => {
            return Game.find({gameId: args.gameId});
        }
    }
};