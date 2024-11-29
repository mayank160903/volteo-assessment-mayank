import React, { useState } from 'react'
import menu from "../../../assets/menu.png"
import checked from "../../../assets/checked.png"
import unchecked from "../../../assets/unchecked.png"

const Checkbox = (props) => {
    const [marked, setIsMarked] = useState(false);


  return (
    <div onClick={props.onClick} className={`flex my-2 cursor-pointer justify-between rounded-xl p-4 bg-[#F9F9F9] ${props.classes}`}>
    <div className='flex items-center'>
      <div>
        {marked ? (
            <img onClick={() => setIsMarked(false)} className='cursor-pointer pr-3 size-15' src={checked} alt="" />
        ) : (
            <img onClick={() => setIsMarked(true)} className='cursor-pointer pr-3 size-15' src={unchecked} alt="" />
        )}
      </div>
      <div className='flex flex-col'>
        <h2 className={` ${props.important ? "text-red-500 font-semibold ": "font-bold"}  ${marked ? `line-through decoration-2` : ``} `}>{props.title}</h2>
        <div className="flex items-center">
        <div className={`text-xs text-[#5A5B6A]`}>Assigned By {props.assignee} </div>
        <div className={`text-xs ml-1 text-[#5A5B6A]  ${props.dueClass ? "text-red-500" : ""}`}>{props.due}</div>
        </div>
      </div>
    </div>
    <img src={menu} className='w-4 h-4 ' alt="" />
    </div>

  )
}

export default Checkbox
