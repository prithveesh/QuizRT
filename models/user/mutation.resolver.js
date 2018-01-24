'use strict';
import Game from '../game/schema.js';
import { ERROR } from '../../constants/messages';

export default {
    Mutation: {
        addUserToGame: (_, args) => {
            return Game.findOne({gameId: args.gameId})
            .then(game => {
                if(game.result.indexOf(args.uId) === -1){
                    game.result.push(args.uId);
                    game.players.push(
                        {
                            uId: args.uId,
                            status: args.status
                        }
                    );
                    return game.save();
                }else{
                    return new Error(ERROR.USER.DUPLICATE);
                }
            });
        },
        updateUserToGame: (_, args) => {
            return Game.findOne({gameId: args.gameId})
            .then(game => {
                if(game.players.find((player, index) => {
                    if(player.uId === args.uId){
                        args.status ? game.players[index].status = args.status : null;
                        args.averageTime ? game.players[index].averageTime = args.averageTime : null;
                        args.totalScore ? game.players[index].totalScore = args.totalScore : null;
                        return true;
                    }
                })){
                    return game.save();
                }else{
                    return new Error(ERROR.USER.NOT_FOUND);
                }
            });
        }
    }
};