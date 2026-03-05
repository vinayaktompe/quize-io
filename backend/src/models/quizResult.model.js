const mongoose = require("mongoose")

const quizResultSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    totalQuizes: {
        type: Number,
        required: true
    },
    correctQuizes: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    rank: {
        type: Number,
        default: null
    }
},
    { timestamps: true }
)

const quizResultModel = mongoose.model("quizresult", quizResultSchema)

module.exports = quizResultModel