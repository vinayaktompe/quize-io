import { Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react"

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"

const Home = () => {
  const navigate = useNavigate();



  return (
    <div className=" relative flex flex-col w-full "
    >
      <div className="h-screen flex justify-center items-center">
      <Navbar />

      <div className="flex  flex-col items-center   gap-7 z-0">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm px-4 flex  gap-2 items-center font-normal text-gray-600 lg:text-lg lg:px-6 py-2 backdrop-blur-2xl border  border-pink-400/80 rounded-full "><Brain strokeWidth={2} size={25} /> AI-Powered Quiz Generation</motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-5xl  lg:text-8xl font-semibold text-center flex flex-col py-3 "

        ><span className="relative  font-bold tracking-tight 
        bg-linear-to-b from-white via-white/80 to-white/40 
        bg-clip-text text-transparent 
        drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)">Generate Quizzes at</span> <span className="relative  font-bold tracking-tight 
        bg-linear-to-b from-white via-white/80 to-white/40 
        bg-clip-text text-transparent 
        drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)">the Speed of Thought.</span></motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-md lg:text-2xl text-center font-normal text-gray-600 flex flex-col lg:w-200"><span>Empowering educators and learners with AI-generated quizzes that improve understanding,retention, and performance.AI-powered learning that adapts to you.</span></motion.p>





        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          onClick={() => { navigate('/generate-quiz') }} className="relative px-6 py-3 rounded-full 
bg-linear-to-r from-indigo-500 to-purple-600 
text-white font-semibold
overflow-hidden
transition-all duration-300
hover:scale-105
before:absolute before:inset-0 
before:bg-white/20 before:opacity-0 
hover:before:opacity-100 
before:transition-opacity before:duration-300 cursor-pointer
">Get Started </motion.button>
      </div>
      {/* <div className="absolute w-[600px] h-[600px] bg-purple-500/40 blur-[150px] rounded-full z-1"></div> */}

    </div>


    <Footer/>
    </div>
  )
}

export default Home;