import { Menu, MessageCircleQuestionMark, Moon, X } from "lucide-react";
import AppPages from "./AppPages";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full  bg-amber-100/40  py-3 h-[10%] px-5 flex justify-between items-center shadow lg:shadow-md shadow-stone-300 fixed top-0 left-0 backdrop-blur-[5px] z-1    ">
      <h2 className="text-3xl flex gap-2 items-center font-bold text-emerald-700 cursor-pointer">
        <MessageCircleQuestionMark strokeWidth={3} size={35} color="red" />
        Quiz.io
      </h2>
      <div className=" hidden lg:flex">
        <AppPages />
      </div>
      <div
        className="lg:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={28} />
      </div>
      <div className="hidden lg:flex gap-3 items-center">
        <Link className="relative px-4 py-2 rounded-full 
bg-linear-to-r from-indigo-500 to-purple-600 
text-white font-semibold
overflow-hidden
transition-all duration-300
hover:scale-105
before:absolute before:inset-0 
before:bg-white/20 before:opacity-0 
hover:before:opacity-100 
before:transition-opacity before:duration-300 cursor-pointer" to={"/signin"}>
          Sign In
        </Link>

        <Link to={"/Profile"}>
          <div className="h-10 w-10 bg-green-900 rounded-full"></div>
        </Link>
      </div>

      {/* mob NAb     */}
      {isOpen && (
        <motion.div
          className="lg:hidden  absolute top-0 right-0 w-1/2 h-screen shadow-md p-10 flex flex-col gap-10 items-center    z-40 bg-gray-800  "
          initial={{ right: -100, opacity: 0 }}
          animate={{ right: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-10 lg:hidden">
            <X
              size={30}
              className="self-center bg-linear-to-r from-indigo-500 to-purple-600  text-amber-50 p-1 rounded-2xl "
              onClick={() => setIsOpen(!isOpen)}
            />
            <AppPages />
          </div>

          <div className="flex flex-col items-center justify-center gap-10 ">
            <Link to={"/Profile"}>
              <div className="h-15 w-15 bg-green-900 rounded-full"></div>
            </Link>
            <Link className="relative px-6 py-3 rounded-full 
bg-linear-to-r from-indigo-500 to-purple-600 
text-white font-semibold
overflow-hidden
transition-all duration-300
hover:scale-105
before:absolute before:inset-0 
before:bg-white/20 before:opacity-0 
hover:before:opacity-100 
before:transition-opacity before:duration-300 cursor-pointer" to={"/signin"}>
              Sign In
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
