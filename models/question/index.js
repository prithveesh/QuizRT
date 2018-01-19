'use strict';
import Question from './type';

const QuestionQuery = `
    ${Question}
`;

export default {
    typeDefs: QuestionQuery
};