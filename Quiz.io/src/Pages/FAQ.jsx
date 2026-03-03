import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const faqData = [
  {
    id: 1,
    question: "How do I start a quiz?",
    answer: "Simply select a quiz category from the homepage and click the 'Start Quiz' button to begin."
  },
  {
    id: 2,
    question: "Is there a time limit for each quiz?",
    answer: "Yes, each quiz has a specific time limit depending on the difficulty level."
  },
  {
    id: 3,
    question: "Can I retake a quiz?",
    answer: "Yes, you can retake quizzes anytime to improve your score and performance."
  },
  {
    id: 4,
    question: "How is my score calculated?",
    answer: "Your score is calculated based on the number of correct answers and the time taken to complete the quiz."
  },
  {
    id: 5,
    question: "Can I see the correct answers after completing the quiz?",
    answer: "Yes, after submitting the quiz, you can review your answers along with the correct ones."
  },
  {
    id: 6,
    question: "Do I need to create an account to play?",
    answer: "You can play as a guest, but creating an account allows you to track your progress and ranking."
  },
  {
    id: 7,
    question: "How does the leaderboard work?",
    answer: "The leaderboard ranks users based on their total points and quiz performance."
  },
  {
    id: 8,
    question: "What happens if I close the quiz midway?",
    answer: "If you close the quiz before submitting, your progress may not be saved."
  }
];

 function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className=" flex flex-col items-center justify-center relative bg-linear-to-br from-purple-300 via-pink-300 to-blue-300 z-0">


 <div className=" absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-size-[40px_40px] -z-10  " />

      <Navbar/>
  
   <div className="w-[95%] lg:w-[50%] mt-20 flex  flex-col p-4 pb-20 ">
      
      <h2 className="text-3xl lg:text-4xl self-center  bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent  font-bold mt-5 mb-5">FAQ's</h2>
   




      {faqData.map((item) => (
        
        <div
          key={item.id}
          className="border text-gray-600   mb-4 shadow-md rounded-2xl"
        >
          <button 
            onClick={() => toggleFAQ(item.id)}
            className={`w-full text-left p-4 font-semibold flex justify-between items-center  backdrop-blur-sm rounded-2xl ${activeId === item.id ? 'border-0':'border-0'}`}
          >
            <div className={`${activeId === item.id ? 'font-bold text-gray-800 ' :''}`}>
                {item.question}
            </div>
          
            <span>{activeId === item.id ? <i class="ri-arrow-up-s-line"></i> : <i class="ri-arrow-down-s-line"></i>}</span>
          </button>
          <div
      className={`transition-all duration-500 ease-in-out overflow-hidden
      ${activeId === item.id 
        ? "max-h-40 opacity-100 p-4 bg-purple-900/50  text-white backdrop-blur-sm rounded-2xl" 
        : "max-h-0 opacity-0"
      }`}
    >
      {item.answer}
    </div>
           
        </div>
      ))}     
       </div>
       <Footer/>
       </div>
  
  );
}
export default FAQ