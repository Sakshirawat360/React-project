import React from 'react'
import './TaskListMedia.css'
const TaskListNumbers = ({data}) => {
  return (
    <div id='sakshi' className='flex mt-10 justify-between gap-5 screen'>
        <div  className=' rounded-xl py-6 px-9 w-[45%] bg-red-400 rawat'>
            <h2 className='text-3xl font-semibold new'>{data.taskCount.newTask}</h2>
            <h3 className='text-xl font-medium mummy'>New Task</h3>
        </div>
        <div  className=' rounded-xl py-6 px-9 w-[45%] bg-blue-400 rawat'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div   className=' rounded-xl py-6 px-9 w-[45%] bg-green-400 rawat'>
            <h2 className='text-3xl font-semibold text-black'>{data.taskCount.active}</h2>
            <h3 className='text-xl font-medium text-black'>Accepted Task</h3>
        </div>
        <div   className=' rounded-xl py-6 px-9 w-[45%] bg-yellow-400 rawat'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers