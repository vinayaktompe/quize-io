
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const quizRouter = require("../routes/quiz.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.use("/api", quizRouter);
module.exports = app;