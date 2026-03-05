import { useLocation } from "react-router-dom";
import { useState, useMemo } from "react";
import { MessageCircleQuestionMark } from "lucide-react";


import { useNavigate } from "react-router-dom";



const QuizPage = () => {
  const { state } = useLocation();
  const rawQuizzes = state?.quizzes || [];
const navigate = useNavigate();
 const quizzes = useMemo(() => {
  return rawQuizzes.map((quiz) => {

    if (quiz.options && quiz.answer) {
      return quiz;
    }

    const options = quiz.answers
      ? Object.values(quiz.answers).filter(Boolean)
      : [];

    let answer = null;

    if (quiz.correct_answers && quiz.answers) {
      const correctEntry = Object.entries(quiz.correct_answers)
        .find(([key, value]) => value === "true");

      if (correctEntry) {
        const answerKey = correctEntry[0].replace("_correct", "");
        answer = quiz.answers[answerKey];
      }
    }
    return {
      question: quiz.question,
      options,
      answer
    };
  });
}, [rawQuizzes]);

  const [currIdx, setCurrIdx] = useState(0);
  const [selected, setSelected] = useState({});

  if (quizzes.length === 0) {
    return <h2>No quiz found</h2>;
  }
  const currentQuiz = quizzes[currIdx];
  const selectedOption = selected[currIdx];

  // scoreCalculate

  const calculateScore = () => {
  let score = 0;

  quizzes.forEach((quiz, index) => {
    if (selected[index] === quiz.answer) {
      score++;
    }
  });

  return score;
};




  return (
    <div className="h-full w-full flex justify-center items-center p-10">
      <div className="w-full  rounded-2xl p-6 shadow-md shadow-gray-300 backdrop-blur-[2px] flex flex-col flex-wrap gap-15">
        <div className="w-full flex justify-between items-center">
          <h2 className="font-bold text-2xl text-gray-900 ">
            Q{currIdx + 1}. {currentQuiz.question}
          </h2>
          <MessageCircleQuestionMark strokeWidth={3} size={30} color="red" />
        </div>

        <div className="flex items-center justify-center flex-wrap gap-5 ">
          {currentQuiz.options.map((opt, i) => (
            <div
              key={i}
              onClick={()=>{
                if (selected[currIdx]) return;
                setSelected((prev)=>({
                  ...prev,
                  [currIdx]:opt
                }));
              }}
              className={`w-[45%] bg-amber-50/60 shadow-xs shadow-gray-500 text-lg font-semibold text-gray-700 p-3 rounded-2xl cursor-pointer ease-linear duration-200 ${selectedOption === opt ? (opt === currentQuiz.answer ? "bg-green-200 text-green-700 font-semibold" : "bg-red-200 text-red-500") : "text-gray-700 hover:bg-gray-200 hover:text-black hover:shadow-sm hover:shadow-gray-900"}`}
            >
              {opt}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-10">
          <button
            onClick={() => {
              setCurrIdx((prev) => prev - 1);
            }}
            disabled={currIdx === 0}
            className="px-4 py-1 bg-blue-600 text-white text-lg font-normal rounded cursor-pointer active:scale-95 disabled:opacity-50"
          >
            Previous
          </button>

          <button
  onClick={() => {
    const score = calculateScore();

    navigate("/result", {
      state: {
        score: score,
        total: quizzes.length
      }
    });
  }}
  className="px-4 py-1 bg-green-600 text-white rounded"
>
  Submit
</button>

          <button
            onClick={() => {
              setCurrIdx((prev) => prev + 1);
            }}
            disabled={currIdx === quizzes.length - 1}
            className="px-4 py-1 bg-blue-600 text-white rounded cursor-pointer active:scale-95 disabled:opacity-50"
          >
            Next
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
