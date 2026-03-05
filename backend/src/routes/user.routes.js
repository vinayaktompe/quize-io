const userController = require("../controllers/user.controller")
const Badge = require("../models/badge.model")
const authUser = require("../middelwares/auth.middleware")
const upload = require("../middelwares/upload.middleware")
const { Router } = require("express")
const router = Router()

router.patch("/profile",authUser,upload.single("profileImage"),userController.updateProfileImageController)


router.post("/submit-quiz", authUser, userController.submitQuizResultController)


module.exports = router