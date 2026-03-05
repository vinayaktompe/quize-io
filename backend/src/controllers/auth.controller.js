const userModel = require("../models/user.model")
const quizResultModel = require("../models/quizResult.model")
const UserBadge = require("../models/userBadge.model")
const redis = require("../config/cache")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

async function userRegisterController(req, res) {

    const { username, email, password } = req.body

    const isUserExists = await userModel.findOne({
        $or: [
            { email },
            { username }
        ]
    })

    if (isUserExists) {
        return res.status(400).json({
            message: "User already exists with this email or username"
        })
    }

    if (password.length < 6) {
        return res.status(400).json({
            message: "password contain aleast 6 letter"
        })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        password: hash
    })

    const token = jwt.sign({
        id: user._id,
        username: user.username
    },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d"
        }
    )

    res.cookie("token", token)

    res.status(200).json({
        message: "user register successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            profileImage: user.profileImage,
            score: user.score,
            badge: user.badge
        },
        "token": token
    })
}

async function userLoginController(req, res) {

    const { email, username, password } = req.body

    const user = await userModel.findOne({
        $or: [
            { email },
            { username }
        ]
    }).select("+password")

    if (!user) {
        return res.status(401).json({
            message: "Invalid Credentials"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid credentials"
        })
    }

    const token = jwt.sign({
        id: user._id,
        username: user.username
    },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    )

    res.cookie("token", token)

    res.status(200).json({
        message: "Login successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            profileImage: user.profileImage,
            role: user.role
        },
        "token": token
    })
}

async function userGetMeController(req, res) {

    const user = await userModel.findById(req.user.id)

    if(!user) {
        return res.status(404).json({
            message: "User not found"
        })
    }

     var quizResult = await quizResultModel.findOne({
        user: req.user.id
    })

    if (!quizResult) {

        quizResult = await quizResultModel.create({
            user: req.user.id,
            score: 0,
            totalQuizes: 0,
            correctQuizes: 0
        })

    }
    quizResult = await quizResultModel.findOne({
        user: req.user.id
    })

    const userBadges = await UserBadge.find({ user: req.user.id }).populate("badge")

    res.status(200).json({
        message: "Userdata fetch successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            profileImage: user.profileImage,
            score: quizResult.score || 0 || null,
            badge: userBadges.map(ub => ({
                id: ub.badge._id,
                name: ub.badge.name,
                icon: ub.badge.icon
            })),
            totalQuizes: quizResult.totalQuizes || 0,
            correctQuizes: quizResult.correctQuizes || 0
        }
    })
}

async function userLogOutController(req, res) {

    const token = req.cookies.token

    res.clearCookie("token")

    await redis.set(token, Date.now().toString(), "Ex", 60 * 60)

    res.status(200).json({
        message: "User Logout Successfully"
    })
}

async function getAllUsersController(req, res) {

    const users = await userModel.find().select("-password")
    res.status(200).json({
        success: true,
        users
    })
}

module.exports = {
    userRegisterController,
    userLoginController,
    userGetMeController,
    userLogOutController,
    getAllUsersController
}