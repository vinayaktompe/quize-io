


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
import { BookCheck, Star, Target, Trophy } from "lucide-react";
import ProfileCard from "../Components/ProfileCard";
import HomeBtn from "../Components/HomeBtn";

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
      icon: <BookCheck size={"60px"} />,
      title: "Quizzes Taken",
      value: "78",
      hoverbg: "hover:bg-blue-600/40",
      bg:"bg-blue-600",
      Mobbg:"bg-blue-600/40",
      border: "border-blue-400",
    },
    {
      id: 2,
      title: "Point",
      icon: <Star size={"60px"} />,
      value: "1540",
      hoverbg: "hover:bg-purple-600/40",
      bg:"bg-purple-600",
      Mobbg:"bg-purple-600/40",
      border: "border-purple-400",
    },
    {
      id: 3,
      icon: <Target size={"60px"} />,
      title: "Accuracy",
      value: "85%",
      hoverbg: "hover:bg-green-600/40",
      bg: "bg-green-600",
      Mobbg:"bg-green-600/40",
      border: "border-green-400",


    },

    {
      id: 5,
      icon: <Trophy size={"60px"}  />,
      title: "Rank",
      value: "#12",
      hoverbg: "hover:bg-red-600/40",
      bg: "bg-red-600",
      Mobbg:"bg-red-600/40",
      border: "border-red-400",
    },
  ];
  return (
    <div className=" relative flex flex-col justify-center  lg:flex-row  p-4 bg-linear-to-br from-purple-300 via-pink-300 to-blue-300 z-0">
   
      <div className=" absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-size-[40px_40px] -z-10 " />
       
       <ProfileCard/>
          <div className="absolute left-10 top-0">
           <HomeBtn />

</div>
      <div className="flex flex-col gap-8  items-center justify-around lg:w-250 p-8">
        <div className="flex flex-wrap  gap-4 justify-center  w-[90%]  ">
          {statsData.map((ele) => {
            return (
              <div
                key={ele.id}
                className={`w-100 lg:min-w-[40%]  px-10 py-6 flex items-center justify-start gap-5 backdrop-blur-[1px]  rounded border ${ele.border} shadow-sm backdrop-blur-sm shadow-gray-200 rounded-lg  cursor-pointer gap-2 hover:scale-105 ${ele.hoverbg} ease-linear duration-500 ${ele.Mobbg} lg:bg-transparent `}
              >
                <i className={` text-5xl text-amber-50 p-2 rounded-full  ${ele.bg}  `}>{ele.icon}</i>
                <div>
                  <p className="font-semibold text-2xl">{ele.title}</p>
                  <p className="text-xl">{ele.value}</p>
                </div>
              </div>
            );
          })}
        </div>

      <div className='flex  flex-wrap lg:flex-nowrap items-start justify-center  lg:overflow-x-scroll gap-10 lg:gap-4 h-60 w-[87%] overflow-scroll '>
{
  
   trophies.map((elem)=>{
    return <div className='flex flex-col  w-[40%] lg:w-full  justify-between items-center '>
       <p className="font-semibold text-xl">{elem.title}</p>
           <div className="h-[150px] w-[150px] lg:h-[200px] lg:w-[200px]  flex flex-col justify-between items-center ">
            <img src={elem.img} alt="" className="w-full h-full" />
           

          </div>
             
    </div>

   })

}

</div>
      </div>
    </div>
  );
};

export default Profile;
