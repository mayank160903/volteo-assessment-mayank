import React, { useState } from "react";

const Form = ({ addTask }) => {
  // Form to add new tasks

  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [important, setImportant] = useState(false);

//   function to handle the onSubmit event
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && assignee.trim()) {
      const newTask = {
        id: Date.now(),
        title,
        assignee,
        dueDate,
        important,
      };

      addTask(newTask);

      setTitle("");
      setAssignee("");
      setDueDate("");
      setImportant(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex text-black flex-col items-center justify-center"
    >
      <label htmlFor="">Title</label>
      <input
        id="title"
        required
        value={title}
        placeholder=" Eg. Shipment status"
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />
      <label htmlFor="">Assignee</label>
      <input
        id="assignee"
        required
        placeholder=" Eg. Wayship"
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
        type="text"
      />
      <label htmlFor="">Due Date/Time</label>
      <input
        id="dueDate"
        required
        value={dueDate}
        placeholder=" due in x Days"
        onChange={(e) => setDueDate(e.target.value)}
        type="text"
      />
      <div className="flex gap-2">
      <label htmlFor="">Mark as Important</label>
      <input
        id="important"
        checked={important}
        onChange={(e) => setImportant(!important)}
        type="checkbox"
      />
      </div>
      
      <button
        type="submit"
        className="cursor-pointer hover:bg-green-600 mt-3 px-3 py-2 bg-blue-600 rounded-3xl text-white"
      >
        Add Task
      </button>
    </form>
  );
};

export default Form;
