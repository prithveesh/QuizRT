'use strict';
import { v4 } from 'uuid';
import Game from './schema.js';

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
            });
        }
    }
};