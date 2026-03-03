import { BadgeCheck, Brain, ClockFading, FileText, LayoutPanelLeft, ListChecks, ScanQrCode } from "lucide-react";
import { motion } from "motion/react"
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Features = () => {
  const quizFeatures = [
    {
      title: "AI-Generated Quiz Sets",
      description:
        "Quiz.io uses advanced AI to generate multiple quiz questions from your prompt, pasted text, or uploaded documents.",
      icon: Brain,
      bgColor: "bg-red-600",
      bgSoft: "hover:bg-red-600/20",
    },
    {
      title: "One-Question-at-a-Time Flow",
      description:
        "Quizzes are presented one question at a time, helping users stay focused and improving the learning experience.",
      icon: FileText,
      bgColor: "bg-yellow-600",
      bgSoft: "hover:bg-yellow-600/20",
    },
    {
      title: "Instant Answer Feedback",
      description:
        "As soon as a user selects an answer, Quiz.io instantly shows whether it is correct or incorrect, helping users learn immediately.",
      icon: BadgeCheck,
      bgColor: "bg-pink-600",
      bgSoft: "hover:bg-pink-600/20",
    },
    {
      title: "10-Question Quiz Sessions",
      description:
        "Each quiz session contains 10 AI-generated questions, carefully created based on your provided content.",
      icon: ListChecks,
      bgColor: "bg-blue-600",
      bgSoft: "hover:bg-blue-600/20",
    },
    {
      title: "Final Score Summary",
      description:
        "After completing the quiz, users receive a clear result showing their score out of 10.",
      icon: ScanQrCode,
      bgColor: "bg-green-600",
      bgSoft: "hover:bg-green-600/20",
    },
    {
      title: "Learning-Focused Experience",
      description:
        "By validating each answer instantly, Quiz.io helps users learn from mistakes and improve their understanding.",
      icon: Brain,
      bgColor: "bg-purple-600",
      bgSoft: "hover:bg-purple-600/20",
    },
    {
      title: "Fast & Seamless Interaction",
      description:
        "Smooth navigation with no interruptions ensures a quick and enjoyable quiz experience.",
      icon: ClockFading,
      bgColor: "bg-orange-600",
      bgSoft: "hover:bg-orange-600/20",
    },
    {
      title: "Clean & User-Friendly Interface",
      description:
        "A modern, intuitive UI designed for simplicity, clarity, and engagement.",
      icon: LayoutPanelLeft,
      bgColor: "bg-gray-600",
      bgSoft: "hover:bg-gray-600/20",
    },
  ];

  return (
    <div className="">
      <Navbar />

      <div className="flex flex-col relative items-center gap-7 bg-linear-to-br from-purple-300 via-pink-300 to-blue-300  pt-25  z-0 ">

        <div className=" absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-size-[40px_40px] -z-10  " />


        <motion.h2 className="text-3xl lg:text-4xl flex gap-2 items-center  bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent  font-bold"
         initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >Key Features </motion.h2>
        <div className="w-full p-10 shadow-sm shadow-gray-400  rounded-lg flex flex-wrap gap-8 justify-center">
          {quizFeatures.map((feature, idx) => {
            return (
              <motion.div key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                 delay: 0.1,
                 duration:0.5
                }}


                className={`w-full lg:w-[20%] shadow-sm backdrop-blur-sm shadow-gray-200 rounded-lg p-5 flex flex-col items-start cursor-pointer gap-2 ${feature.bgSoft} hover:scale-105 ease-linear duration-500`}>
                <div className={`h-15 w-15 ${feature.bgColor} text-gray-200 rounded-full flex justify-center items-center ease-linear duration-400`}><feature.icon strokeWidth={3} size={35} /></div>
                <h2 className="text-xl font-semibold">{feature.title}</h2>
                <p className="text-sm font-medium text-start text-gray-500">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Features;
