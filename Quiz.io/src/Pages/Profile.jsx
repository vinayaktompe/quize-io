import { parseCSSVariable, useAnimationFrame } from "motion/react";
import React from "react";

const Profile = () => {
  {
  }

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
    <div className="flex  h-full gap-8">
      <div className=" flex flex-col items-center  justify-center gap-5 border p-8">
        <h1 className="font-semibold">User Name </h1>
        <div className="w-50 h-50 bg-emerald-800 rounded-full"></div>
        <p>@username</p>
        <p>email</p>
        <button className="bg-emerald-800 p-2 text-amber-50 font-semibold">
          Edit Profile
        </button>
      </div>
      <div className="border w-300 p-8">
        <div className="flex flex-wrap gap-4 justify-center bg-sky-100   rounded-2xl shadow-[5px_5px_5px_rgba(0,0,0,0.15)]  ">
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
      </div>
    </div>
  );
};

export default Profile;
