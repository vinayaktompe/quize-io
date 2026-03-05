const mongoose = require("mongoose")

const badgeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    icon: {
        type: String,
        required: true
    },
    minScore: {
        type: Number,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model("Badge", badgeSchema)