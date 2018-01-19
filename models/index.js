'use strict';
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { makeExecutableSchema } from 'graphql-tools';
import { buildSchema } from 'graphql';
import gameSchema from './game/index.js';
import questionSchema from './question';
import userSchema from './user';
import queryResolver from './game/query.resolver';


// List of all Types/Queries
const types = [
    gameSchema.typeDefs,
    questionSchema.typeDefs,
    userSchema.typeDefs
];
// List of all Resolvers
const resolvers = [
    gameSchema.resolvers.Query,
    gameSchema.resolvers.Mutation
];

// Merge all types and resolvers
const RootQuery = mergeTypes(types);
const RootResolvers = mergeResolvers(resolvers);

export default makeExecutableSchema({
    typeDefs: [RootQuery],
    resolvers: RootResolvers
});