import React, { useState } from 'react'
import cloud from "../../assets/cloud.png"
import Checkbox from './tasklist/Checkbox'
import plus from "../../assets/plus.png"


const ThirdGrid = () => {

    const [tasks, setTasks] = useState([
        {
            id: 1, 
            title: "Deck Log | 1200-1600 Watch",
            assignee : "Wayship",
            due : "",
            checked: true
        },
        {
            id: 2, 
            title: "COVID19 Health Guidelines",
            assignee : "Technical",
            due: " | Due in 2 days",
            checked: false
        },
        {
            id: 3, 
            title: "Steering Check",
            assignee : "Captain",
            due: " | Due in 2 hours",
            checked: false
        },
        {
            id: 4, 
            title: "ECDIS Check",
            assignee : "Chief Officer",
            due: " | Due in 6 hours",
            checked: false
        },
        {
            id: 5, 
            title: "Review Noon Report",
            assignee : "Self",
            due: " | Due in 8 hours",
            checked: false
        }
    ]);

    const [newTask, setNewTask] = useState('');


  return (
    <section className="bg-white border rounded-xl border-gray-300 p-6 shadow-sm col-span-1">
        <div className="flex justify-between">
            <div className="flex flex-col">
            <h2 className="font-bold text-2xl mb-4">My Day</h2>
            <p className="text-gray-600 pb-4 font-semibold">Tuesday, March 2</p>
            </div>
            <div>
                <img className='size-12' src={cloud} alt="" />
            </div>
        </div>
        {tasks.map((item) => (
            <Checkbox key={item.id} title={item.title} assignee={item.assignee} due={item.due} checked={item.checked} />
        ))}

        <div className='flex border items-center py-4 gap-10 text-[#787885] p-4 rounded-xl border-gray-300'>
            <div>
                <img className='size-7' src={plus} alt="" />
            </div>
            <div className='text-xm font-medium'>Add a to-do reminder</div>
        </div>  
        </section>
  )
}

export default ThirdGrid
