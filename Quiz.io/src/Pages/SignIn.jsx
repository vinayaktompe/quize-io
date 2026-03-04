import second from "../assets/loginsvg.svg";
import { Link } from "react-router-dom";
import bg from "../assets/grident.jpg";

const SignIn = () => {
  return (
    <div className="h-screen w-screen  ">
      <div
        className="h-full relative w-full bg-pink-300 flex bg-cover items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
      >


        {" "}
        <div className="bg-white/10 absolute h-full w-full"></div>
        <div className=" p-8 flex flex-col lg:flex-row gap-10 border border-amber-50 rounded-2xl backdrop-blur-2xl"
        
        >
          <div>
            <img src={second} className="h-60 self-center  w-full lg:h-100" alt="" />
          </div>
          <form action="" className="flex flex-col gap-4 w-70 lg:w-100 ">
            <h1 className="text-4xl font-semibold">Sign In</h1>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              className="px-4  py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              id="pass"
              placeholder="Enter Your Password"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              id="pass"
              placeholder="Renter Your Password"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Link to={"/login"}>
              <button className="w-full relative px-6 py-3 rounded-xl 
bg-linear-to-r from-indigo-500 to-purple-600 
text-white font-semibold
overflow-hidden
transition-all duration-300
hover:scale-105
before:absolute before:inset-0 
before:bg-white/20 before:opacity-0 
hover:before:opacity-100 
before:transition-opacity before:duration-300 cursor-pointer">
                Sign In
              </button>
            </Link>
            <p className="self-center text-sm lg:text-xl">
              Already Have A Account ?{" "}
              <Link className="text-blue-500 font-semibold " to={"/login"}>
                login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div> 
  );
};

export default SignIn;
