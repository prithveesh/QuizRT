const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameEngineSchema = new Schema({
    gameId: {
        type: String,
        required: true,
        index: {unique: true}
    },
    status: {
        type: String,
        required: true
    },
    topicId: {
        type: String,
        required: true
    },
    questions: [
        {
            qId: String,
            answer: String,
            _id: false
        }
    ],
    result: [String],
    players: [
        {
            _id: false,
            uId: {
                type: String
            },
            averageTime: Number,
            status: String,
            totalScore: Number,
            questions: [
                {
                    questionId: String,
                    time: Number,
                    answer: String,
                    status: Boolean
                }
            ]
        }
    ]
});



export default mongoose.model('GameEngine', gameEngineSchema);