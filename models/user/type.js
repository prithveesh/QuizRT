export default `
type User {
    uId: String!
    averageTime: Int
    status: String
    totalScore: Int
    questions: [Question]
}
`;