
const axios = require("axios")


const generateQuiz = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ message: "Prompt is required" });
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

    res.status(200).json({ quiz })
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" })
  }
}

const generateRandomQuiz = async (req, res) => {
  try {

    const response = await axios.get(
      `https://quizapi.io/api/v1/quizzes/cmmdjge5e00mkutgrn2025lta/questions`,
      {
        params: {
          api_key: process.env.RANDOM_QUIZ_API_KEY
        },
      }
    )

    res.status(200).json({
      success: true,
      quizzes: response.data
    })

  } catch (error) {

    console.log("Quiz API Error:", error.response?.data || error.message)

    res.status(500).json({
      success: false,
      message: "Failed to fetch quizzes"
    })
  }
}

module.exports = {
  generateQuiz,
  generateRandomQuiz
}