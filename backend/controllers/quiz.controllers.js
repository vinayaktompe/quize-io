
const axios = require("axios")

const RANDOM_QUIZ_API_KEY = process.env.RANDOM_QUIZ_API_KEY;

const generateQuiz = async(req, res) => {
    try{
        const {prompt} = req.body;

        if(!prompt) {
            return res.status(400).json({message: "Prompt is required"});
        }

        const quiz = [
      {
        question: `What is ${prompt}?`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: `Explain ${prompt} in simple words`,
        options: ["Yes", "No", "Maybe", "None"],
        answer: "Yes",
      },
    ];

    res.status(200).json({quiz})
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Server error"})
    }
}

const generateRandomQuiz =  async (req, res) => {
  try{
    const response = await axios("https://quizapi.io/api/v1/questions",{
      params : {limit : 10},
      headers : {"X-Api-Key" : RANDOM_QUIZ_API_KEY},
    })
    res.status(200).json({quizzes: response.data});
  }catch(err){
    console.error("Error fetching quizzes:", err.message);
    res.status(500).json({ message: "Failed to fetch quizzes" });
  }
}

module.exports = {
  generateQuiz,
  generateRandomQuiz
}