import bg from "../assets/profile-bg.jpg";

import trophy1 from "../assets/1.png";
import trophy2 from "../assets/2.png";
import trophy3 from "../assets/3.png";
import trophy4 from "../assets/4.png";
import trophy5 from "../assets/5.png";
import trophy6 from "../assets/6.png";
import trophy7 from "../assets/7.png";
import trophy8 from "../assets/8.png";
import trophy9 from "../assets/9.png";
import trophy10 from "../assets/10.png";
import trophy11 from "../assets/11.png";
import { div } from "motion/react-client";

const Profile = () => {
  const trophies = [
    {
      id: 1,
      title: "Trophy 1",
      img: trophy1,
    },
    {
      id: 2,
      title: "Trophy 2",
      img: trophy2,
    },
    {
      id: 3,
      title: "Trophy 3",
      img: trophy3,
    },
    {
      id: 4,
      title: "Trophy 4",
      img: trophy4,
    },
    {
      id: 5,
      title: "Trophy 5",
      img: trophy5,
    },
    {
      id: 6,
      title: "Trophy 6",
      img: trophy6,
    },
    {
      id: 7,
      title: "Trophy 7",
      img: trophy7,
    },
    {
      id: 8,
      title: "Trophy 8",
      img: trophy8,
    },
    {
      id: 9,
      title: "Trophy 9",
      img: trophy9,
    },
    {
      id: 10,
      title: "Trophy 10",
      img: trophy10,
    },
    {
      id: 11,
      title: "Trophy 11",
      img: trophy11,
    }
  ];

  const statsData = [
    {
      id: 1,
      png: "ri-list-check-3",
      title: "Quizzes Taken",
      value: 78,
      bg: "bg-blue-200",
      color: "text-blue-900",
    },
    {
      id: 2,
      png: "ri-star-fill",
      title: "Points",
      value: 1540,
      bg: "bg-purple-200",
      color: "text-purple-900",
    },
    {
      id: 3,
      png: "ri-target-fill",
      title: "Accuracy",
      value: "85%",
      bg: "bg-green-200",
      color: "text-green-900",
      progress: 85,
    },

    {
      id: 5,
      png: "ri-trophy-fill",
      title: "Rank",
      value: "#12",
      bg: "bg-red-200",
      color: "text-red-900",
    },
  ];
  return (
    <div className=" relative flex flex-col lg:flex-row h-screen w-screen gap-8 p-4 bg-linear-to-br from-purple-300 via-pink-300 to-blue-300 z-0">
      <div className=" absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-size-[40px_40px] -z-10 " />
      <div
        className="flex flex-col items-center bg-cover bg-center  rounded-2xl text-white  justify-center gap-5  p-8 "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="font-semibold">User Name </h1>
        <div className="w-50 h-50 bg-emerald-800 rounded-full"></div>
        <p>@username</p>
        <p>email</p>
        <button className="relative px-4 lg:px-6 py-2 lg:py-3 rounded-full 
bg-linear-to-r from-indigo-500 to-purple-600 
text-white lg:font-semibold
overflow-hidden
transition-all duration-300
hover:scale-105
before:absolute before:inset-0 
before:bg-white/20 before:opacity-0 
hover:before:opacity-100 
before:transition-opacity before:duration-300 cursor-pointer drop-shadow-sm drop-shadow-amber-50 
      ">
          Edit Profile
        </button>
      </div>
      <div className="flex flex-col items-center gap-10 w-250 p-8">
        <div className="flex flex-wrap  gap-4 justify-center  w-[90%]  ">
          {statsData.map((ele) => {
            return (
              <div
                key={ele.id}
                className={`${ele.bg} w-[45%] px-4 py-4 flex items-center justify-center gap-2 rounded border border-${ele.color}`}
              >
                <i className={`${ele.png} text-5xl ${ele.color}`}></i>
                <div>
                  <p className="font-semibold">{ele.title}</p>
                  <p>{ele.value}</p>
                </div>
              </div>
            );
          })}
        </div>

      <div className='flex overflow-x-auto gap-2  h-60 w-[80%]'>
{
  
   trophies.map((elem)=>{
    return <div className='flex flex-col h-50  items-center '>
           <div className="h-[200px] w-[200px] ">
            <img src={elem.img} alt="" className="w-full h-full" />

           </div>
             <p>{elem.title}</p>

    </div>

   })

}

</div>
      </div>
    </div>
  );
};

export default Profile;
