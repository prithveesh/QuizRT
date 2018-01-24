export default `
type Query {
    getGameById(gameId: String!): [Game]
}
`;