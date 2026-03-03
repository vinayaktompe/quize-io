import second from '../assets/loginsvg.svg'
import { Link } from "react-router-dom"
const SignIn = () => {
  return (
    <div className='h-screen w-full absolute top-0 left-0 bglight flex justify-center items-center'>
    
    <div className=' p-8 flex  gap-10 border rounded-2xl'>

  
<div >
  <img src={second} className='h-100' alt="" />
</div>
      <form action="" className="flex flex-col gap-4 w-100">

             <h1 className='text-4xl font-semibold'>Sign In</h1>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          

        <Link to={'/login'}>
          <button
            
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
          >
            Sign In
          </button>
        </Link>
          <p className='self-center text-xl'>Already Have A Account ? <Link className='text-blue-500 font-semibold ' to={'/login'}>login</Link></p>

       


      </form>
        </div>
    </div>
  )
}

export default SignIn