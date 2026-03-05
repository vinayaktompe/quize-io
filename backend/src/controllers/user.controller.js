const userModel = require("../models/user.model")
const { uploadFile } = require("../services/storage.service")
const Badge = require("../models/badge.model")
const UserBadge = require("../models/userBadge.model")
const quizResultModel = require("../models/quizResult.model")


async function updateProfileImageController(req, res) {

    try {
        const userId = req.user.id
        const profileImage = req.file.buffer


        if (!profileImage) {
            return res.status(400).json({
                message: "profileImage is required"
            })
        }

        const uploadedImage = await uploadFile({
            buffer: profileImage,
            filename: `${userId}-profile`,
            folder: "quize-io/profiles"
        })

        const user = await userModel.findByIdAndUpdate(
            userId,
            { profileImage: uploadedImage.url },
            { new: true, runValidators: true }
        )

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        res.status(200).json({
            message: "ProfileImage Updated",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                profileImage: user.profileImage,
                score: user.score,
                badge: user.badge
            }
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update profile image",
            error: error.message
        })
    }
}

async function assignBadges(userId, score) {
    

    const badges = await Badge.find({
        minScore: { $lte: score }
    })

    for (const badge of badges) {

        const alreadyHave = await UserBadge.findOne({
            user: userId,
            badge: badge._id
        })

        if (!alreadyHave) {
            await UserBadge.create({
                user: userId,
                badge: badge._id
            })
        }

    }
}

async function submitQuizResultController(req, res) {

    try {
        const userId = req.user.id
        const { totalQuizes, correctQuizes, score } = req.body

        if (totalQuizes === undefined || correctQuizes === undefined || score === undefined) {
            return res.status(400).json({
                success: false,
                message: "totalQuizes, correctQuizes and score are required"
            })
        }

        const existingResult = await quizResultModel.findOne({ user: userId })

        if (existingResult) {
            existingResult.totalQuizes += totalQuizes
            existingResult.correctQuizes += correctQuizes
            existingResult.score += score
            await existingResult.save()

            await assignBadges(userId, existingResult.score)

            return res.status(200).json({
                success: true,
                message: "Quiz result updated successfully",
                quizResult: existingResult
            })
        }

        const quizResult = await quizResultModel.create({
            user: userId,
            totalQuizes,
            correctQuizes,
            score
        })

        await assignBadges(userId, quizResult.score)

        res.status(201).json({
            success: true,
            message: "Quiz result submitted successfully",
            quizResult
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to submit quiz result",
            error: error.message
        })
    }
}

module.exports = {
    updateProfileImageController,
    submitQuizResultController
}