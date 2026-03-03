import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "0gt774VcQs1Jn4IcrasPdzrdeIcR739SiJUHKdsK";
const Working = () => {
const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
    async function fetchQuizzes() {
      try {
        const response = await axios.get(
          "https://quizapi.io/api/v1/questions",
          {
            params: {
              limit: 10, 
            },
            headers: {
              "X-Api-Key": API_KEY,
            },
          }
        );

         setQuizzes(response.data);
         console.log(response.data);
         
        setLoading(false);
      } catch (err) {
        console.error("Error fetching quizzes:", err);
        setError("Failed to fetch quizzes");
        setLoading(false);
      }
    }

    fetchQuizzes();
  }, []);

  if (loading) return <p>Loading quizzes...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
       <div className="p-4">
      {quizzes.map((q, idx) => (
        <div key={idx} className="border p-4 mb-3 rounded">
          <h3 className="font-semibold mb-2">{q.question}</h3>
          <ul className="list-disc ml-6">
            {Object.entries(q.answers).map(([key, ans]) =>
              ans ? <li key={key}>{ans}</li> : null
            )}
          </ul>
        </div>
      ))}
    </div>
    
    </div>
  )
}

export default Working