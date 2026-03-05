const mongoose = require("mongoose")

const userBadgeSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },

    badge: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Badge",
        required: true
    },

}, { timestamps: true })

userBadgeSchema.index({ user: 1, badge: 1 }, { unique: true })

module.exports = mongoose.model("UserBadge", userBadgeSchema)