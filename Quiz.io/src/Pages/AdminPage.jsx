import React from 'react'
import ProfileCard from "../Components/ProfileCard";

const users = [
  { id: 1, name: "Vinayak" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Sneha" },
  { id: 4, name: "Amit" },
  { id: 5, name: "Priya" },
  { id: 6, name: "Akash" },
  { id: 7, name: "Neha" },
  { id: 8, name: "Rohit" },
  { id: 9, name: "Pooja" },
  { id: 10, name: "Sagar" },
  { id: 11, name: "Ankit" },
  { id: 12, name: "Kiran" },
  { id: 13, name: "Nikhil" },
  { id: 14, name: "Komal" },
  { id: 15, name: "Shubham" },
  { id: 16, name: "Tejas" },
  { id: 17, name: "Riya" },
  { id: 18, name: "Aditya" },
  { id: 19, name: "Tanvi" },
  { id: 20, name: "Yash" },
  { id: 21, name: "Om" },
  { id: 22, name: "Anjali" },
  { id: 23, name: "Harsh" },
  { id: 24, name: "Meera" },
  { id: 25, name: "Arjun" },
  { id: 26, name: "Kavya" },
  { id: 27, name: "Manish" },
  { id: 28, name: "Sonia" },
  { id: 29, name: "Vikas" },
  { id: 30, name: "Deepak" },
  { id: 31, name: "Rakesh" },
  { id: 32, name: "Divya" },
  { id: 33, name: "Siddharth" },
  { id: 34, name: "Aarti" },
  { id: 35, name: "Nitin" },
  { id: 36, name: "Bhavesh" },
  { id: 37, name: "Payal" },
  { id: 38, name: "Gaurav" },
  { id: 39, name: "Isha" },
  { id: 40, name: "Chirag" },
  { id: 41, name: "Sakshi" },
  { id: 42, name: "Pratik" },
  { id: 43, name: "Mohit" },
  { id: 44, name: "Swati" },
  { id: 45, name: "Raj" },
  { id: 46, name: "Ritu" },
  { id: 47, name: "Abhishek" },
  { id: 48, name: "Varun" },
  { id: 49, name: "Anushka" },
  { id: 50, name: "Kunal" },
  { id: 51, name: "Tushar" },
  { id: 52, name: "Nisha" },
  { id: 53, name: "Ajay" },
  { id: 54, name: "Seema" },
  { id: 55, name: "Vivek" },
  { id: 56, name: "Alok" },
  { id: 57, name: "Simran" },
  { id: 58, name: "Rohan" },
  { id: 59, name: "Sanjay" },
  { id: 60, name: "Pallavi" },
  { id: 61, name: "Mahesh" },
  { id: 62, name: "Rashmi" },
  { id: 63, name: "Dev" },
  { id: 64, name: "Ananya" },
  { id: 65, name: "Kartik" },
  { id: 66, name: "Anurag" },
  { id: 67, name: "Monika" },
  { id: 68, name: "Pradeep" },
  { id: 69, name: "Saloni" },
  { id: 70, name: "Ashish" },
  { id: 71, name: "Lakshmi" },
  { id: 72, name: "Vijay" },
  { id: 73, name: "Umesh" },
  { id: 74, name: "Rupali" },
  { id: 75, name: "Shivam" },
  { id: 76, name: "Pankaj" },
  { id: 77, name: "Preeti" },
  { id: 78, name: "Hemant" },
  { id: 79, name: "Suresh" },
  { id: 80, name: "Kanchan" },
  { id: 81, name: "Ravi" },
  { id: 82, name: "Ankita" },
  { id: 83, name: "Tarun" },
  { id: 84, name: "Bhavna" },
  { id: 85, name: "Naveen" },
  { id: 86, name: "Sonal" },
  { id: 87, name: "Dinesh" },
  { id: 88, name: "Garima" },
  { id: 89, name: "Lokesh" },
  { id: 90, name: "Ayesha" },
  { id: 91, name: "Rajat" },
  { id: 92, name: "Kriti" },
  { id: 93, name: "Suraj" },
  { id: 94, name: "Mansi" },
  { id: 95, name: "Arnav" },
  { id: 96, name: "Nandini" },
  { id: 97, name: "Dhruv" },
  { id: 98, name: "Ishita" },
  { id: 99, name: "Aryan" },
  { id: 100, name: "Shreya" }
];


const AdminPage = () => {
  return (
    <div className=' h-full flex flex-col justify-center items-center gap-5'>
       
      
       <h1 className='text-5xl font-semibold'>Admin Page</h1>
       <div className='flex gap-5 w-[90%] ' >

      
       <ProfileCard />
       <div className='bg-gray-300  h-120 p-4 rounded-2xl  overflow-scroll'>

      
      <table className='w-full  text-left bg-gray-300'>
        <thead className='sticky top-0 bg-sky-100 w-[full]' >
        <tr className='bg-sky-100    '>
            <th className='p-4'>Srno</th>
            <th className='p-4'>Name</th>
            <th className='p-4'>Edit Profile</th>
          </tr>
        </thead>

        <tbody className=''>
          {
            users.map((elem) => {
             return <tr key={elem.id} className='border-b'>
                <td className='p-4 w-100'>{elem.id}</td>
                <td className='p-4 w-150 '>{elem.name}</td>
                <td className='p-4 '><button className='bg-emerald-700 p-1 text-amber-50 rounded-xl '>ViewProfile</button></td>
              </tr>



            })



          }
        </tbody>



      </table>
 </div>



    </div>
     </div>
  )
}

export default AdminPage