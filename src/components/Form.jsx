import React, { useState } from 'react'

const Form = ({addTask}) => {

    const [title, setTitle] = useState('');
    const [assignee, setAssignee] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [important, setImportant] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() && assignee.trim()){

            const newTask = {
                id: Date.now(),
                title,
                assignee,
                dueDate,
                important,
            };

            addTask(newTask);

            setTitle('');
            setAssignee('');
            setDueDate('');
            setImportant(false);
        }
    }

  return (
    <form onSubmit={handleSubmit} className='flex text-black flex-col items-center justify-center'>
      <label htmlFor="">Title</label>
      <input
      id="title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      type="text" />
      <label htmlFor="">Assignee</label>
      <input
      id="assignee"
      value={assignee}
      onChange={(e) => setAssignee(e.target.value)}
      type="text" />
      <label htmlFor="">Due Date/Time</label>
      <input
      id="dueDate"
      value={dueDate}
      onChange={(e) => setDueDate(e.target.value)}
      type="text" />
      <label htmlFor="">Important</label>
      <input
      id="important"
      checked={important}
      onChange={(e) => setImportant(e.target.value)}
      type="checkbox" />
      <button type='submit' className='cursor-pointer my-3 px-3 py-2 bg-blue-600 rounded-md text-white'>Add Task</button>
    </form>
  )
}

export default Form
