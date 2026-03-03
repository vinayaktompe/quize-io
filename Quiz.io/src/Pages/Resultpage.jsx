import { useLocation, useNavigate } from "react-router-dom";

const ResultPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const score = state?.score || 0;
  const total = state?.total || 0;

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white p-10 rounded shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Quiz Completed </h2>

        <p className="text-xl mb-4">
          Your Score: {score} / {total}
        </p>

        <button
          onClick={() => navigate("/generate-quiz")}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ResultPage;