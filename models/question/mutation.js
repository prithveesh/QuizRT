export default `
type Mutation {
    addQuestionToGame(
        gameId: String!
        qId: String!
        answer: String!
    ): Game

    updateQuestionToGame(
        gameId: String!
        qId: String!
        answer: String!
    ): Game
}
`;