const jwt = require("jsonwebtoken")
const redis = require("../config/cache")

async function authUser(req, res, next) {

    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "token not provided"
        })
    }

    const isTokenblacklisted = await redis.get(token)

    if(isTokenblacklisted){
        return res.status(401).json({
            message:"Invalid token"
        })
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        )
        req.user = decoded

        next()

    } catch (err) {

        res.status(401).json({
            message: "Invalid token"
        })
    }
}

module.exports = authUser