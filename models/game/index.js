'use strict';
import queryResolvers from './query.resolver';
import mutationResolvers from './mutation.resolver';
import Game from './type';
import Query from './query';
import Mutation from './mutation';

const GameQuery = `
    ${Game}
    ${Query}
    ${Mutation}
`;

export default {
    typeDefs: GameQuery,
    resolvers: {
        Query: queryResolvers,
        Mutation: mutationResolvers
    }
};