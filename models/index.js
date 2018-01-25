'use strict';
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { makeExecutableSchema } from 'graphql-tools';
import { buildSchema } from 'graphql';
import gameSchema from './game/index';
import questionSchema from './question/index';
import userSchema from './user/index';


// List of all Types/Queries
const types = [
    questionSchema.typeDefs,
    userSchema.typeDefs,
    gameSchema.typeDefs
];
// List of all Resolvers
const resolvers = [
    questionSchema.resolvers.Mutation,
    userSchema.resolvers.Mutation,
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