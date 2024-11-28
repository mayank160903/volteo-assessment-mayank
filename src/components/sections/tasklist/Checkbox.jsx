import React, { useState } from 'react'
import menu from "../../../assets/menu.png"
import checked from "../../../assets/checked.png"
import unchecked from "../../../assets/unchecked.png"

const Checkbox = (props) => {
    const [marked, setIsMarked] = useState(false);


  return (
    <div className={`flex justify-between rounded-xl p-6 bg-[#F9F9F9] ${props.classes}`}>
    <div className='flex items-center'>
      <div>
        {marked ? (
            <img onClick={() => setIsMarked(false)} className='cursor-pointer pr-3 size-15' src={checked} alt="" />
        ) : (
            <img onClick={() => setIsMarked(true)} className='cursor-pointer pr-3 size-15' src={unchecked} alt="" />
        )}
      </div>
      <div className='flex flex-col'>
        <h2 className={`font-bold ${marked ? `line-through decoration-2` : ``} `}>{props.title}</h2>
        <p className='text-xs'>Assigned By {props.assignee} | {props.due}</p>
      </div>
    </div>
    <img src={menu} className='w-4 h-4 ' alt="" />
    </div>

  )
}

export default Checkbox
