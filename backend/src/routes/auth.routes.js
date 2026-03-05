const authController = require("../controllers/auth.controller")
const authUser = require("../middelwares/auth.middleware")
const authAdmin = require("../middelwares/admin.middleware")
const { Router } = require("express")
const router = Router()

router.post("/register", authController.userRegisterController)

router.post("/login",  authController.userLoginController)

router.get("/get-me", authUser, authController.userGetMeController)

router.get("/logout", authUser, authController.userLogOutController)

router.get("/all-users", authUser, authAdmin, authController.getAllUsersController)

module.exports = router