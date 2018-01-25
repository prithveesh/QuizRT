export default `
type Mutation {
    createGame(
        status: String!
        topicId: String!
        result: [String]
        players: [String]
    ): Game
}
`;