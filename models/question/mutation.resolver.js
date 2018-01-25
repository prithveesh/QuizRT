'use strict';
import Game from '../game/schema.js';
import { publishGlobalEvents, subscribeGlobalEvents } from '../../utils/pub-sub';
import { ERROR } from '../../constants/messages';

export default {
    Mutation: {
        addQuestionToGame: (_, args) => {
            return Game.findOne({gameId: args.gameId})
            .then(game => {
                if(game.questions.every((question) => { return question.qId !== args.qId; })){
                    game.questions.push(
                        {
                            qId: args.qId,
                            answer: args.answer
                        }
                    );
                    subscribeGlobalEvents('ADD_QUESTIONS_GAME', (subEvent) => {
                        subEvent.on("message", (channel, message) => {
                            console.log(`Received the following message from ${channel}: ${message}`);
                        });
                    });
                    publishGlobalEvents('ADD_QUESTIONS_GAME', JSON.stringify(game));
                    return game.save();
                }else{
                    return new Error(ERROR.QUESTION.DUPLICATE);
                }
            });
        },
        updateQuestionToGame: (_, args) => {
            return Game.findOne({gameId: args.gameId})
            .then(game => {
                if(game.questions.find((question, index) => {
                    if(question.qId === args.qId){
                        game.questions[index].answer = args.answer;
                        return true;
                    }
                })){
                    subscribeGlobalEvents('UPDATE_QUESTIONS_GAME', (subEvent) => {
                        subEvent.on("message", (channel, message) => {
                            console.log(`Received the following message from ${channel}: ${message}`);
                        });
                    });
                    publishGlobalEvents('UPDATE_QUESTIONS_GAME', JSON.stringify(game));
                    return game.save();
                }else{
                    return new Error(ERROR.QUESTION.NOT_FOUND);
                }
            });
        }
    }
};