
const express = require("express")
const {generateQuiz, generateRandomQuiz} =require("../controllers/quiz.controllers")


const quizRouter = express.Router();

quizRouter.post("/generate-quiz", generateQuiz);
quizRouter.get("/generate-random-quiz", generateRandomQuiz);

module.exports = quizRouter