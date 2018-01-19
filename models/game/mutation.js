export default `
type Mutation {
    createGame(
        gameId: String!
        status: String!
        topicId: String!
        questions: [String]
        result: [String]
        players: [String]
    ): Game
}
`;