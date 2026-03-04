import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GenerateQuiz = ({ type }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGenerate = async () => {
    setLoading(true);

    try {
      if (type === "Random") {
        const response = await axios.get(
          "http://localhost:3000/api/generate-random-quiz",
        );

        navigate("/quiz", {
          state: { quizzes: response.data.quizzes },
        });

        return;
      }
      let endpoint = "";
      let body = {};

      if (type === "Prompt") {
        if (!input.trim()) return;
        endpoint = "/api/generate-quiz";
        body = { prompt: input };
      } else if (type === "Text") {
        if (!input.trim()) return;
        endpoint = "/api/generate-quiz-text";
        body = { text: input };
      } else if (type === "Document") {
        if (!input) return;
        endpoint = "/api/generate-quiz-doc";
        body = { document: input };
      }

      const response = await axios.post(
        `http://localhost:3000${endpoint}`,
        body,
      );

      navigate("/quiz", {
        state: { quizzes: response.data.quiz },
      });

      setInput("");
    } catch (err) {
      console.error("Quiz generate error:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full w-full p-5 flex flex-col justify-center items-center gap-7">
      {type === "Prompt" && (
        <>
          <h2 className="text-xl lg:text-2xl font-semibold">
            Just enter a prompt and let AI generate a quiz for you.
          </h2>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="  w-full lg:w-[50%]  px-5 py-2 bg-amber-50/40 text-lg lg:text-xl rounded-full font-semibold border-none outline-none shadow-gray-200 shadow-sm"
            type="text"
            placeholder="Enter your prompt here..."
          />
        </>
      )}

      {type === "Text" && (
        <>
          <h2 className="text-2xl font-semibold">
            Create quizzes instantly from any text you enter or paste.
          </h2>
          <div className="h-[60%] w-full lg:w-[50%] rounded-2xl shadow-xs shadow-gray-400">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="h-full w-full text-xl lg:text-2xl  bg-amber-50/40 rounded-2xl  p-2 border-none outline-none"
              placeholder="Paste in your notes or other content."
            />
          </div>
        </>
      )}

      {type === "Document" && (
        <>
          <h2 className="text-2xl font-semibold">
            Upload a document and generate quizzes instantly.
          </h2>
          <div className="h-[60%] w-full lg:w-[50%] rounded-lg bg-amber-50/40 shadow-xs shadow-gray-400 flex justify-center items-center">
            <input 
              type="file"
              onChange={(e) => setInput(e.target.files[0])}
              className="w-full text-xl text-blue-700 cursor-pointer p-2 border-none outline-none"
            />
          </div>
        </>
      )}

      {type === "Random" && (
        <>
          <h2 className="text-2xl font-semibold ">
            Generate random quizzes about computer science.
          </h2>
          <p className="text-gray-600 font-medium  " >
            Click below to get a random set of CS quizzes instantly.
          </p>
        </>
      )}

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="relative px-4 lg:px-6 py-2 lg:py-3 rounded-full 
bg-linear-to-r from-indigo-500 to-purple-600 
text-white lg:font-semibold
overflow-hidden
transition-all duration-300
hover:scale-105
before:absolute before:inset-0 
before:bg-white/20 before:opacity-0 
hover:before:opacity-100 
before:transition-opacity before:duration-300 cursor-pointer"
      >
        {loading ? "Generating..." : "Generate Quizzes"}
      </button>
    </div>
  );
};

export default GenerateQuiz;
