import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const authData =  useContext(AuthContext)
  console.log(authData);
  
  return (
    <div  className='bg-[#1c1c1c] p-5 mt-6 '>
        <div  className='bg-red-400 py-2 px-4 rounded flex justify-between mb-3 font-semibold'>
            <h2 className='w-1/5'>Employe Name</h2>
            <h3 id='emp' className='w-1/5 '>New Task</h3>
            <h4 className='w-1/5'>Active Task</h4>
            <h4 className='w-1/5'>Done task</h4>
            <h4 className='w-1/5'>Failed task</h4>
        </div>
        
        <div id='alltaskone' className=' h-[80%] '>
        {authData.employees.map(function(elem,idx){
            return <div key={idx} className=' border-2 py-2 px-4 rounded flex justify-between mb-3 '>
            <h2 className='text-lg font-medium  w-1/5 '>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 ml-7 text-blue-600'>{elem.taskCount.newTask}</h3>
            <h4 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCount.active}</h4>
            <h4 className='text-lg font-medium w-1/5 '>{elem.taskCount.completed}</h4>
            <h4 className='text-lg font-medium w-1/5 text-red-500'>{elem.taskCount.failed}</h4>
        </div>
        })}
        </div>
        
    </div>
  )
}

export default AllTask