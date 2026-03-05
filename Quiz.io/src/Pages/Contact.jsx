import { div } from "motion/react-client";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Contact = () => {
  return (
    <div >
    <div className="flex flex-col   relative justify-center gap-5 items-center lg:h-screen  bg-linear-to-br from-purple-300 via-pink-300 to-blue-300 z-0 pt-30 lg:pt-10  px-5">
      <div className=" absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-size-[40px_40px] -z-10 " />
      <Navbar />
      <h1 className="text-2xl lg:text-3xl font-bold text-emerald-700">
        Contact Us
      </h1>
      

      <div className="flex flex-col lg:flex-row  items-center gap-5 lg:gap-10 pb-10">
        <div className="flex  flex-col  items-start justify-center gap-6 p-4 rounded-2xl   lg:w-100">
          <div className=" rounded-2xl flex  ">
        <div className=" flex flex-col gap-4">
          <p className="text-2xl font-semibold">We’d love to hear from you!</p>
          <p className="text-xl">
            Whether you have a question about quizzes, features, feedback, or
            anything else — our team is ready to help.
          </p>
        </div>
      </div>
          <div>
            <p className="font-semibold border-b-2 border-orange-500 w-fit">
              <span>
                <i class="ri-map-pin-line"></i>
              </span>{" "}
              Our Location
            </p>
            <p>Chhatrapati Sambhaji Nagar , Maharastra , India</p>
          </div>
          <div>
            <p className="font-semibold border-b-2 border-orange-500 w-fit">
              <span>
                <i class="ri-mail-line"></i>
              </span>{" "}
              Email
            </p>
            <p>Support@gmail.com</p>
          </div>
          <div>
            <p className="font-semibold border-b-2 border-orange-500 w-fit">
              <span>
                <i class="ri-phone-line"></i>
              </span>{" "}
              Phone
            </p>
            <p>9175873439</p>
          </div>
        </div>

        <div>
          <form action="" className="flex flex-col gap-4 lg:gap-2 backdrop-blur-2xl p-4 rounded-2xl shadow-sm shadow-gray-100 w-80 lg:w-100">
            <h1 className="text-2xl font-semibold">Get in Touch</h1>
            <p>
              Have questions or suggestions? Fill out the form below and we’ll
              get back to you as soon as possible.
            </p>

            <input
              type="name"
              placeholder="Enter Your Name"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              id="email"
              autoComplete="off"
              placeholder="Enter Your Email"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Enter Your Subject"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name=""
              id=""
              placeholder="Enter Your Massage"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button className="relative px-6 py-3 rounded-2xl
bg-linear-to-r from-indigo-500 to-purple-600 
text-white font-semibold
overflow-hidden
transition-all duration-300
hover:scale-105
before:absolute before:inset-0 
before:bg-white/20 before:opacity-0 
hover:before:opacity-100 
before:transition-opacity before:duration-300 cursor-pointer">
              Submit
            </button>
          </form>
        </div>
      </div>
     
    </div> <Footer/>
    </div>
  );
};

export default Contact;
