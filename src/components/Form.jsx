import React from 'react'

const Form = () => {
  return (
    <form className='flex flex-col items-center justify-center'>
      <label htmlFor="">Title</label>
      <input type="text" />
      <label htmlFor="">Assignee</label>
      <input type="text" />
      <label htmlFor="">Due Date/Time</label>
      <input type="text" />
      <label htmlFor="">Important</label>
      <input type="checkbox" />
      <button className='cursor-pointer m-3 p-3 bg-blue-600 rounded-xl text-white'>Add Task</button>
    </form>
  )
}

export default Form
