import React from 'react'

const NewTask = ({data}) => {
  console.log(data);
  
  return (
    <div className='flex-shrink-0 p-5  w-[300px] bg-yellow-400 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
    <p className='mt-5 text-sm'>{data.description}</p>

    <div className='flex justify-between mt-6'>
        <button className='bg-green-600 hover:bg-green-700 text-white py-1 px-2 rounded text-sm'>Mark as Completed</button>
        <button className='bg-red-600 hover:bg-red-700 text-white py-1 px-2 rounded text-sm'>Mark as Failed</button>
      </div>
</div>
  )
}

export default NewTask