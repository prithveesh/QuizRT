export default `
type User {
    id: ID!
    averageTime: Int
    status: Status!
    totalScore: Int
    questions: [Question]
}
`;