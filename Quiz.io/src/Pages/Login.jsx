import second from '../assets/access.svg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   <div className='h-screen w-full absolute top-0 left-0 bglight  flex justify-center items-center'>
    
        <div className=' p-8 flex  gap-10 border rounded-2xl'>

      <form action="" className="flex justify-center flex-col gap-4 w-100">

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

           <Link to={'/home'}>         <button
            
            className=" w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200 "
          >
          LogIn
          </button></Link>
          

 
          <p className='self-center text-xl'>You Don't Have Account? <Link className='text-blue-500 font-semibold ' to={'/signin'}>SignIn</Link></p>

       


      </form>
      <div className='bg-sky-600 p-4 rounded-2xl'>
  <img src={second} className='h-100' alt="" />
</div>
      </div>
    </div>
  )
}

export default Login