export default `
type Game {
    gameId: String!
    status: String!
    topicId: String!
    questions: [Question]
    result: [String!]
    players: [User]
}
`;