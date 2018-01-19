export default `
type Game {
    gameId: ID!
    status: String!
    topicId: String!
    questions: [Question]
    result: [String!]
    players: [User]
}
type Question {
    id: ID!
    answer: String!
    time: Int
    status: Boolean
}
type User {
    id: ID!
    averageTime: Int
    status: String!
    totalScore: Int
    questions: [Question]
}
`;