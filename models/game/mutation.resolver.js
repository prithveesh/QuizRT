'use strict';
import Game from './schema.js';

export default {
    Mutation: {
        createGame: (_, args) => {
            return Game.create({
                gameId: args.gameId,
                status: args.status,
                topicId: args.topicId,
                questions: args.questions,
                result: args.result,
                players: args.players
            })
        }
    }
};