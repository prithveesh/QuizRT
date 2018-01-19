'use strict';
import User from './type';

const UserQuery = `
    ${User}
`;

export default {
    typeDefs: UserQuery
};