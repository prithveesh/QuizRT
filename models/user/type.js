export default `
type User {
    userId: String!
    averageTime: Int
    status: String!
    totalScore: Int
    questions: [Question]
}
`;