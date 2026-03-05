import second from '../assets/access.svg'
import { Link } from 'react-router-dom'
import bg from "../assets/grident.jpg";

const Login = () => {
  return (
   <div className='h-screen w-full absolute top-0 left-0 bglight  flex justify-center items-center'>

       <div
            className="h-full relative w-full bg-pink-300 flex bg-cover items-center justify-center"
            style={{ backgroundImage: `url(${bg})` }}
          >
    
        <div className=' p-8 flex  flex-col-reverse lg:flex-row backdrop-blur-sm  gap-10 border border-amber-50 rounded-2xl'>

      <form action="" className="flex justify-center flex-col gap-4 w-70 lg:w-100 ">

             <h1 className='text-4xl font-semibold'>Log In</h1>
          

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

           <Link to={'/'}>         <button
            
            className=" w-full relative px-6 py-3 rounded-xl 
bg-linear-to-r from-indigo-500 to-purple-600 
text-white font-semibold
overflow-hidden
transition-all duration-300
hover:scale-105
before:absolute before:inset-0 
before:bg-white/20 before:opacity-0 
hover:before:opacity-100 
before:transition-opacity before:duration-300 cursor-pointer" >
          LogIn
          </button></Link>
          

 
          <p className='self-center text-sm lg:text-xl'>You Don't Have Account? <Link className='text-blue-500 font-semibold ' to={'/signin'}>SignIn</Link></p>

       


      </form>
   
  <img src={second} className='h-60 lg:h-100' alt="" />

      </div>
    </div>
    </div>
  )
}

export default Login