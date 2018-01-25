'use strict';
import Question from './type';
import Mutation from './mutation';
import mutationResolvers from './mutation.resolver';

const QuestionQuery = `
    ${Question}
    ${Mutation}
`;

export default {
    typeDefs: QuestionQuery,
    resolvers: {
        Mutation: mutationResolvers
    }
};