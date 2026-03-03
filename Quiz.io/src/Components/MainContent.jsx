import Home from "../Pages/Home"
import About from "../Pages/About"
import Features from "../Pages/Features"
import Working from "../Pages/Working"
import FAQ from "../Pages/FAQ"
import Contact from "../Pages/Contact"
import SignIn from "../Pages/SignIn"
import { Route, Routes } from "react-router-dom"
import QuizGenerator from "../Pages/QuizGenerator"
import QuizPage from "./QuizPage"

import Profile from "../Pages/Profile"
import AdminPage from "../Pages/AdminPage"
import Login from "../Pages/Login"
import ResultPage from "../Pages/Resultpage"


const MainContent = () => {
  return (
    <div className='relative   h-screen bg-linear-to-br from-purple-300 via-pink-300 to-blue-300 z-0'
       
    >
      {/* squre component */}
       <div className=" absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-size-[40px_40px] z-[-10]  " />
      
        <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/generate-quiz" element={<QuizGenerator/>}/>
        <Route path="/quiz" element={<QuizPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/working" element={<Working/>}/>
        <Route path="/faqs" element={<FAQ/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signin" element={<SignIn/>}/>
    
         <Route path="/Profile" element={<Profile/>}/>
         <Route path="/AdminPage" element={<AdminPage/>} />
         
         <Route path="/login" element={<Login/>}/>
         <Route path='/' element={<Login/>}/>
         <Route path="/result" element={<ResultPage/>} />
      </Routes>
    </div>
  )
}

export default MainContent