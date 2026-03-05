import { useState } from "react";
import GenerateQuiz from "../Components/GenerateQuiz";
import HomeBtn from "../Components/HomeBtn";

const QuizGenerator = () => {
  const types = ["Prompt", "Text", "Document", "Random"];
  const [typeSelect, setTypeSelect] = useState("Prompt");

  return (
    <div className="flex flex-col items-center pt-15 gap-10 p-6 ">
      <HomeBtn/>
      <h2 className="text-4xl text-center font-semibold text-emerald-700">AI Quiz Generator</h2>
      <p className="text-xl text-gray-600 text-center font-semibold mb-4">
        Generate quizzes from prompt, paste your notes, upload a document, or get random quizzes about computer science.
      </p>
      <div className="flex py-1 px-1 w-80 lg:w-100 backdrop-blur-lg rounded-full text-md font-semibold mb-4">
        {types.map((t) => (
          <span
            key={t}
            onClick={() => setTypeSelect(t)}
            className={`px-3 lg:px-5  py-1 cursor-pointer rounded-full transition-all duration-300
              ${typeSelect === t ? "bg-gray-100 text-blue-600 shadow" : "text-gray-600 shadow-gray-200 shadow-2xl"}
            `}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="w-full lg:h-[70%] rounded-lg backdrop-blur-xs shadow-gray-200 shadow-md ">
        <GenerateQuiz type={typeSelect} />
      </div>
    </div>
  );
};

export default QuizGenerator;
