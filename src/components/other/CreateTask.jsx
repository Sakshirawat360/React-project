import React, { useState } from 'react';

const CreateTask = () => {

  
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignto, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const newTaskObj = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Get employee data
    const Data = localStorage.getItem('employees');
    if (!Data) {
      console.error('No employees found in localStorage');
      return;
    }

    const data = JSON.parse(Data);

    let taskAdded = false;
    data.forEach((employee) => {
      if (assignto.trim().toLowerCase() === employee.firstName.toLowerCase()) {
        employee.tasks.push(newTaskObj);
        employee.taskCount.newTask += 1;
        taskAdded = true;
      }
    });

    if (!taskAdded) {
      console.error('Employee not found. Check name or casing.');
      return;
    }

    localStorage.setItem('employees', JSON.stringify(data));
    console.log('Task added successfully ✅');
    console.log(data);

    // Reset form
    setAssignTo('');
    setTaskDate('');
    setCategory('');
    setTaskDescription('');
    setTaskTitle('');
  };

  return (
    <div className='mt-5'>
      <form
        onSubmit={submitHandler}
        id='adminform'
        className='flex flex-wrap w-full items-start justify-between bg-red-200 p-5'
      >
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5 font-bold'>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
              type='text'
              placeholder='Make A UI Design'
              required
            />
          </div>

          <div className='mt-3'>
            <h3 className='text-sm text-gray-300 mb-0.5 font-bold'>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
              type='date'
              required
            />
          </div>

          <div className='mt-3'>
            <h3 className='text-sm text-gray-300 mb-0.5 font-bold'>Assign to</h3>
            <input
              value={assignto}
              onChange={(e) => setAssignTo(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
              type='text'
              placeholder='Employee Name'
              required
            />
          </div>

          <div className='mt-3'>
            <h3 className='text-sm text-gray-300 mb-0.5 font-bold'>Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
              type='text'
              placeholder='Design, dev etc.'
              required
            />
          </div>
        </div>

        <div className='w-1/2'>
          <h3 className='text-sm text-gray-300 mb-0.5 font-bold'>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
            required
          ></textarea>

          <button
            type='submit'
            className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full font-bold'
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
