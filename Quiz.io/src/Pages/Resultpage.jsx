
import { useLocation, useNavigate } from "react-router-dom";
import HomeBtn from "../Components/HomeBtn";

const ResultPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const score = state?.score || 0;
  const total = state?.total || 0;

  const percent = Math.round((score / total) * 100);

  return (
    <div className="h-screen flex justify-center items-center">
  <HomeBtn/>

     

      <div className="backdrop-blur-[2px] p-10 rounded shadow-lg text-center flex flex-col gap-5">
        <h2 className="text-4xl font-bold bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent ">Score Card</h2>

        <p className="text-4xl font-semibold ">
          Your Score: {score*10} / {total*10}
        </p>
        <p className="text-4xl font-bold bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent  ">
          {percent}%
        </p>

        <button
          onClick={() => navigate("/generate-quiz")}
          className="relative px-6 py-3 rounded-2xl
bg-linear-to-r from-indigo-500 to-purple-600 
text-white font-semibold
overflow-hidden
transition-all duration-300
hover:scale-105
before:absolute before:inset-0 
before:bg-white/20 before:opacity-0 
hover:before:opacity-100 
before:transition-opacity before:duration-300 cursor-pointer"
        >
          Go To GenerateQuiz
        </button>
      </div>
    </div>
  );
};

export default ResultPage;