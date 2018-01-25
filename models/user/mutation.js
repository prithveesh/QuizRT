export default `
type Mutation {
    addUserToGame(
        gameId: String!
        uId: String!
        status: String!
    ): Game

    updateUserToGame(
        gameId: String!
        uId: String!
        status: String
        averageTime: Int
        totalScore: Int
    ): Game
}
`;