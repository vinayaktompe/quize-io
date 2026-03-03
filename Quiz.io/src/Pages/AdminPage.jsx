import React from 'react'

const users = [
  { id: 1, name: "Vinayak" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Sneha" },
  { id: 4, name: "Amit" },
];


const AdminPage = () => {
  return (
    <div>
       <h1 className='text-2xl font-semibold'>Admin Page</h1>
       <div className='bg-gray-300 p-4 rounded-2xl'>

      
      <table className='w-full text-left bg-gray-300  '>
        <thead>
          <tr className='bg-sky-100'>
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
                <td className='p-4 '><button className='bg-emerald-700 p-1 text-amber-50 rounded-xl '>EditProfile</button></td>
              </tr>



            })



          }
        </tbody>



      </table>
 </div>



    </div>
  )
}

export default AdminPage