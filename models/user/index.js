'use strict';
import User from './type';
import Mutation from './mutation';
import mutationResolver from './mutation.resolver';

const UserQuery = `
    ${User}
    ${Mutation}
`;

export default {
    typeDefs: UserQuery,
    resolvers: {
        Mutation: mutationResolver
    }
};