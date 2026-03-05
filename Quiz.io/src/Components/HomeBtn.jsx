import { Home } from 'lucide-react'
import { useNavigate } from "react-router-dom";

const HomeBtn = () => {

      const navigate = useNavigate();


  return (
    <div className={` bg-amber-100 absolute top-10 left-10 flex justify-center items-center  h-15 w-15 rounded-full`}>
        <button onClick={()=>{
             navigate("/")
        }}><Home  size={30}/></button>
    </div>
  )
}

export default HomeBtn