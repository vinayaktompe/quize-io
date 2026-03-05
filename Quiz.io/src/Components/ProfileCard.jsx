import React from 'react'
import bg from "../assets/profile-bg.jpg";

const ProfileCard = () => {
  return (
    <div> <div
        className="flex flex-col h-full w-full items-center bg-cover bg-center  rounded-2xl text-white  justify-center gap-5  p-8 "
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
      </div></div>
  )
}

export default ProfileCard