export default `
type Mutation {
    createGame(
        gameId: ID!
        status: String!
        topicId: String!
        questions: [String]
        result: [String]
        players: [String]
    ): Game
}
`;