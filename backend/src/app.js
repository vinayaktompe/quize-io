const express = require("express")
const cookieParser = require("cookie-parser")

const app = express()

app.use(express.json())
app.use(cookieParser())

const authRoutes = require("./routes/auth.routes")
const userRoutes = require("./routes/user.routes")
const contactRoutes = require("./routes/contact.routes")
const quizRoutes = require("./routes/quiz.routes")

app.use("/api/quizes", quizRoutes)

app.use("/api/user", contactRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/user",userRoutes)

module.exports = app