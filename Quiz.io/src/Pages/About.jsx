import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { motion } from "motion/react"

const About = () => {
  return (
    <div className='  '>
           <Navbar/>
    <div className="h-screen flex  flex-col items-center justify-center gap-5">
      
      <motion.h2 className="text-4xl lg:text-5xl flex gap-2 items-center   bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent  font-bold"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
      >Quiz.io</motion.h2>
      <div className="text-sm lg:text-2xl w-[90%] font-semibold p-8 shadow-md backdrop-blur-[1px] shadow-gray-200 rounded-lg text-gray-800 flex flex-col  gap-4">
          <motion.h3 
               initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          >Quiz.io is a smart, AI-powered quiz generator designed to transform your ideas, text, and documents into engaging, high-quality quizzes in seconds. Whether you’re a student preparing for exams, a teacher creating assessments, or a professional building training materials, Quiz.io makes quiz creation effortless and enjoyable with no manual question writing required.</motion.h3>
          <motion.h3
               initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          >With Quiz.io, you can generate quizzes directly from prompts, paste your notes or study material, or upload documents such as PDFs and files. Our advanced AI analyzes your content and instantly creates accurate, well-structured questions, helping you save time while making learning more interactive, effective, and fun.</motion.h3>
      </div>
      </div>
        <Footer/>
    </div>
  )
}

export default About